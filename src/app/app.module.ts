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
import { CeramicsInteriorsPageComponent } from './components/pages/ceramics-interiors-page/ceramics-interiors-page.component';
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
import { CeramicsWatercolorPageComponent } from './components/pages/ceramics-watercolor-page/ceramics-watercolor-page.component';
import { MetalWatercolorPageComponent } from './components/pages/metal-watercolor-page/metal-watercolor-page.component';
import { CeramicInteriorPageComponent } from './components/pages/ceramic-interior-page/ceramic-interior-page.component';
import { ModalComponent } from './components/shared/modal/modal.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { CeramicDecorPageComponent } from './components/pages/ceramic-decor-page/ceramic-decor-page.component';
import { CeramicSculpturesPageComponent } from './components/pages/ceramic-sculptures-page/ceramic-sculptures-page.component';
import { CeramicFolkartPageComponent } from './components/pages/ceramic-folkart-page/ceramic-folkart-page.component';
import { CeramicPanelsPageComponent } from './components/pages/ceramic-panels-page/ceramic-panels-page.component';
import { PreloaderComponent } from './components/shared/preloader/preloader.component';
import { ImagesPlaceholderComponent } from './components/shared/images-placeholder/images-placeholder.component';
import { GalleryItemComponent } from './components/shared/gallery-item/gallery-item.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    SwitchLanguageComponent,
    CeramicsInteriorsPageComponent,
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
    CarouselPageTemplateComponent,
    CeramicsWatercolorPageComponent,
    MetalWatercolorPageComponent,
    CeramicInteriorPageComponent,
    ModalComponent,
    CeramicDecorPageComponent,
    CeramicSculpturesPageComponent,
    CeramicFolkartPageComponent,
    CeramicPanelsPageComponent,
    PreloaderComponent,
    ImagesPlaceholderComponent,
    GalleryItemComponent
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
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
