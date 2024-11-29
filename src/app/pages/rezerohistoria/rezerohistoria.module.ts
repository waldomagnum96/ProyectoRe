import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RezerohistoriaPageRoutingModule } from './rezerohistoria-routing.module';

import { RezerohistoriaPage } from './rezerohistoria.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RezerohistoriaPageRoutingModule,
    MatCardModule
  ],
  declarations: [RezerohistoriaPage]
})
export class RezerohistoriaPageModule {}
