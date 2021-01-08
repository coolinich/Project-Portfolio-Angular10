import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'pkl-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
    ) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
  }
   
  
  ngOnInit(): void {
  }

  onSubmit() {
    var payload = new FormData();
    payload.append('name', this.contactForm.get('contactFormName').value);
    payload.append('message', this.contactForm.get('contactFormMessage').value);
    payload.append('email', this.contactForm.get('contactFormEmail').value);

    this.http.post('', payload).subscribe(
      (response) => {
        console.log('success', response);
      },
      (error) => {
        console.log('error', error);
      }
    )
    //console.log('payload', payload.get('name'));
    // this.contactForm.reset();
    this.disabledSubmitButton = true;
  }

}