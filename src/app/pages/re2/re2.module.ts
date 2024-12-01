import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re2PageRoutingModule } from './re2-routing.module';

import { Re2Page } from './re2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re2PageRoutingModule
  ],
  declarations: [Re2Page]
})
export class Re2PageModule {}
