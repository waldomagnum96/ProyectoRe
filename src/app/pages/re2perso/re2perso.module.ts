import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re2persoPageRoutingModule } from './re2perso-routing.module';

import { Re2persoPage } from './re2perso.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re2persoPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re2persoPage]
})
export class Re2persoPageModule {}
