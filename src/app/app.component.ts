import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from 'src/assets/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  languageToUse: string;

  title = 'portfolio-lar';
  
  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.languageToUse = localStorage.getItem('language');
    if (this.languageToUse != null) {
      this.translateService.use(this.languageToUse);
    } else {
      this.translateService.use(LANGUAGES[0]);
    }
  }

}
