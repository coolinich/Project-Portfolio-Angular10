import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {HttpClientModule, HttpClient} from '@angular/common/http';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SwitchLanguageComponent } from './components/shared/switch-language/switch-language.component';
import { PortfolioWallartsComponent } from './components/pages/portfolio-wallarts/portfolio-wallarts.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { ContactsPageComponent } from './components/pages/contacts/contacts-page.component';
import { PricesPageComponent } from './components/pages/prices-page/prices-page.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { CeramicsCategoriesPageComponent } from './components/pages/ceramics-categories-page/ceramics-categories-page.component';
import { MetalCategoriesPageComponent } from './components/pages/metal-categories-page/metal-categories-page.component';
import { CategoryTileComponent } from './components/shared/category-tile/category-tile.component';
import { GalleryComponent } from './components/shared/gallery/gallery.component';
import { GalleryPageTemplateComponent } from './components/shared/gallery-page-template/gallery-page-template.component';
import { CarouselPageTemplateComponent } from './components/shared/carousel-page-template/carousel-page-template.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SwitchLanguageComponent,
    PortfolioWallartsComponent,
    CarouselComponent,
    ContactsPageComponent,
    PricesPageComponent,
    AboutUsPageComponent,
    BreadcrumbsComponent,
    CeramicsCategoriesPageComponent,
    MetalCategoriesPageComponent,
    CategoryTileComponent,
    GalleryComponent,
    GalleryPageTemplateComponent,
    CarouselPageTemplateComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
