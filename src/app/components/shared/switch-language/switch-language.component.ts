import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LANGUAGES } from 'src/assets/constants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'pkl-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.css']
})
export class SwitchLanguageComponent implements OnInit {
  languageToUse: string;
  readonly LANGUAGES: typeof LANGUAGES = LANGUAGES;
  private languageToUseId: number;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.languageToUse = this.translate.currentLang;
    if (this.languageToUse != null) {
      this.languageToUseId = LANGUAGES.findIndex(el => el === this.languageToUse);
      this.setActiveBtn(this.languageToUseId);
    } else {
      this.translate.use(LANGUAGES[0]);
    }
  }

  changeLanguage(selectedLanguage: number): void {
    this.setActiveBtn(selectedLanguage);
    this.languageToUse = LANGUAGES[selectedLanguage];
    this.translate.use(this.languageToUse);
    localStorage.setItem('language', this.languageToUse);
  }

  setActiveBtn(selectedLanguage: number): void {
    if (document.getElementsByClassName('selected').length) {
      Array.from(document.getElementsByClassName('selected')).forEach(el => el.classList.remove('selected'));
    }
    document.getElementById('languageId-' + selectedLanguage.toString())?.classList.add('selected');
  }
}
