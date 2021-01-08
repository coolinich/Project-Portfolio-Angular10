import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'pkl-main-page',
    styleUrls: ['main-page.component.scss'],
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    constructor(translate: TranslateService) {}
}
