import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re2armaPageRoutingModule } from './re2arma-routing.module';

import { Re2armaPage } from './re2arma.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re2armaPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re2armaPage]
})
export class Re2armaPageModule {}
