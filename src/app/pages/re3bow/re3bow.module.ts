import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re3bowPageRoutingModule } from './re3bow-routing.module';

import { Re3bowPage } from './re3bow.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re3bowPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re3bowPage]
})
export class Re3bowPageModule {}
