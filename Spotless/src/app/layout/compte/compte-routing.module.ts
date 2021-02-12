import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptePage } from './compte.page';

const routes: Routes = [
  {
    path: '',
    component: ComptePage
  },
  {
    path: 'myratings',
    loadChildren: () => import('./myratings/myratings.module').then( m => m.MyratingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptePageRoutingModule {}
