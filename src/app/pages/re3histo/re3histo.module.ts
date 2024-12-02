import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re3histoPageRoutingModule } from './re3histo-routing.module';

import { Re3histoPage } from './re3histo.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re3histoPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re3histoPage]
})
export class Re3histoPageModule {}
