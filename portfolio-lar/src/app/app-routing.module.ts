import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { CeramicsInteriorsPageComponent } from './components/pages/ceramics-interiors-page/ceramics-interiors-page.component';
import { CeramicInteriorPageComponent } from './components/pages/ceramic-interior-page/ceramic-interior-page.component';
import { ContactsPageComponent } from './components/pages/contacts/contacts-page.component';
import { PricesPageComponent } from './components/pages/prices-page/prices-page.component';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { CeramicsCategoriesPageComponent } from './components/pages/ceramics-categories-page/ceramics-categories-page.component';
import { MetalCategoriesPageComponent } from './components/pages/metal-categories-page/metal-categories-page.component';
import { CeramicsWatercolorPageComponent } from './components/pages/ceramics-watercolor-page/ceramics-watercolor-page.component';


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
            path: 'interiors',
            data:
            {
              breadcrumb: 'CERAMICS_PAGE.category_4'
            },
            children: [
              {
                path: '',
                data: 
                {
                  breadcrumb: null
                },
                component: CeramicsInteriorsPageComponent
              },
              {
                path: ':id',
                component: CeramicInteriorPageComponent,
                data:
                {
                  breadcrumb: 'CERAMICS_PAGE.sub_category_4'
                }
              }
            ]
          },
          {
            path: 'watercolor',
            component: CeramicsWatercolorPageComponent,
            data:
            {
              breadcrumb: 'CERAMICS_PAGE.category_6'
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
