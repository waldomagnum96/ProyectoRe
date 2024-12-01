import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re2histoPageRoutingModule } from './re2histo-routing.module';

import { Re2histoPage } from './re2histo.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re2histoPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re2histoPage]
})
export class Re2histoPageModule {}
