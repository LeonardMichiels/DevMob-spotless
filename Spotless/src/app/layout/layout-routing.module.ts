import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {

        path: 'liste',
        loadChildren: () => import('./liste/liste.module').then(m => m.ListePageModule)
      },
      {
        path: 'carte',
        loadChildren: () => import('./carte/carte.module').then(m => m.CartePageModule)
      },
      {
        path: 'compte',
        loadChildren: () => import('./compte/compte.module').then(m => m.ComptePageModule)
      },
      {
        path: 'ratings',
        loadChildren: () => import('./ratings/ratings.module').then( m => m.RatingsPageModule)
      }
   
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule { }
