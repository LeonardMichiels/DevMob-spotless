import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingPage } from './ratings.page';

const routes: Routes = [
  {
    path: ':place-id',
    component: RatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatingsPageRoutingModule {}
