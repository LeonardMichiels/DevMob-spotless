import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatingsPageRoutingModule } from './ratings-routing.module';

import { RatingPage } from './ratings.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RatingPage]
})
export class RatingsPageModule {}
