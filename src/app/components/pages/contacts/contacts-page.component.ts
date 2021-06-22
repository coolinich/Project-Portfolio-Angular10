import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { ContactBotService } from 'src/app/services/contact-bot.service';
import { BotMessageBody } from 'src/app/interfaces/bot';
import { CHAT_ID } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'pkl-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnDestroy {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;
  private readonly activePageSubject$ = new Subject;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
      }
    }

  constructor(
    private fb: FormBuilder,
    private mailService: MailService,
    private contactBotService: ContactBotService
  ) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormMessage': ['', Validators.compose([Validators.required, Validators.maxLength(4096)])],
      });
  }

  get contactFormCopy() {
    return this.contactForm.get('contactFormCopy') as FormGroup;
  }

  onSubmitEmail() {
    this.mailService.sendEmail(this.contactForm.value)
    .pipe(takeUntil(this.activePageSubject$))
    .subscribe(
      (response) => {
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        console.error('error from component', error);
      }
    )
  }

  onSubmitToBot() {
    const botMessage: BotMessageBody = {
      chat_id:  CHAT_ID,
      text: `
      <b>Name:</b> ${this.contactForm.value?.contactFormName};
      <b>Email:</b> ${this.contactForm.value?.contactFormEmail};
      <b>Text:</b> ${this.contactForm.value?.contactFormMessage};
      `,
      parse_mode: 'HTML'
    } 
    this.contactBotService.sendMessageToBot(botMessage).subscribe(
      (response) => {
        this.contactForm.reset();
        this.contactFormMessage.markAsUntouched();
        this.disabledSubmitButton = true;  
      },
      (error) => {
        console.error('Error when contact bot', error)
      }
    )
  }

  get contactFormMessage() {
    return this.contactForm.get('contactFormMessage');
  }

  ngOnDestroy(): void {
    this.activePageSubject$.next();
  }
}