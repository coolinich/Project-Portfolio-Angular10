import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

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
    private mailService: MailService
  ) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [false],
      });
  }
   
  
  ngOnInit(): void {
  }

  get contactFormCopy() {
    return this.contactForm.get('contactFormCopy') as FormGroup;
  }

  onSubmit() {
    this.mailService.sendEmail(this.contactForm.value).subscribe(
      (response) => {
        console.log('success from component', response);
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        console.log('error from component', error);
      }
    )
  }
}