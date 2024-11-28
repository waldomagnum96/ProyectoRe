import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RezeroarmasPageRoutingModule } from './rezeroarmas-routing.module';

import { RezeroarmasPage } from './rezeroarmas.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RezeroarmasPageRoutingModule,
    MatCardModule
  ],
  declarations: [RezeroarmasPage]
})
export class RezeroarmasPageModule {}
