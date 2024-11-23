import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiresidentPageRoutingModule } from './apiresident-routing.module';

import { ApiresidentPage } from './apiresident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiresidentPageRoutingModule
  ],
  declarations: [ApiresidentPage]
})
export class ApiresidentPageModule {}
