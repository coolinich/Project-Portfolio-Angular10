import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from '../app/components/pages/main-page/main-page.component';
import { PortfolioWallartsComponent } from '../app/components/pages/portfolio-wallarts/portfolio-wallarts.component';
import { ContactsPageComponent } from './components/pages/contacts/contacts-page.component';
import { PricesPageComponent } from './components/pages/prices-page/prices-page.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { CeramicsCategoriesPageComponent } from './components/pages/ceramics-categories-page/ceramics-categories-page.component';
import { MetalCategoriesPageComponent } from './components/pages/metal-categories-page/metal-categories-page.component';


const routes: Routes = [
  { path: 'home',
    data: 
    {
      breadcrumb: 'MENU.home'
    },
    children: [
      {
        path: '',
        data:
        {
          breadcrumb: null
        },
        component: MainPageComponent
      },
      {
        path: 'ceramics',
        data:
        {
          breadcrumb: 'CERAMICS_PAGE.ceramics_page_title'
        },
        children: [
          {
            path: '',
            data:
            {
              breadcrumb: null
            },
            component: CeramicsCategoriesPageComponent
          },
          {
            path: 'portfolio-wallarts',
            component: PortfolioWallartsComponent,
            data:
            {
              breadcrumb: 'Wall arts'
            }
          }
        ]
      },
      {
        path: 'metal',
        data:
        {
          breadcrumb: 'METAL_PAGE.metal_page_title'
        },
        children: [
          {
            path: '',
            data:
            {
              breadcrumb: null
            },
            component: MetalCategoriesPageComponent
          }
        ]
      },
      { 
        path: 'contacts',
        data: {
          breadcrumb: 'MENU.contacts'
        },
        component: ContactsPageComponent
      },
      { 
        path: 'prices',
        data: {
          breadcrumb: 'MENU.pricing'
        },
        component: PricesPageComponent 
      },
      { 
        path: 'about-us',
        data: {
          breadcrumb: 'MENU.about'
        },
        component: AboutUsPageComponent 
      },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
