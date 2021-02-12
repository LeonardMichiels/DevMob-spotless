import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyratingsPageRoutingModule } from './myratings-routing.module';

import { MyratingsPage } from './myratings.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyratingsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [MyratingsPage]
})
export class MyratingsPageModule {}
