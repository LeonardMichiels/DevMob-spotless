import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';

import { Camera } from '@ionic-native/camera';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
  ],
  declarations: [
    FormPage
  ], 
  providers:[
    //Camera
  ]
})
export class FormPageModule {}
