import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyratingsPage } from './myratings.page';

const routes: Routes = [
  {
    path: '',
    component: MyratingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyratingsPageRoutingModule {}
