import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re3armaPageRoutingModule } from './re3arma-routing.module';

import { Re3armaPage } from './re3arma.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re3armaPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re3armaPage]
})
export class Re3armaPageModule {}
