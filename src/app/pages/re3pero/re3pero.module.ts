import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re3peroPageRoutingModule } from './re3pero-routing.module';

import { Re3peroPage } from './re3pero.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re3peroPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re3peroPage]
})
export class Re3peroPageModule {}
