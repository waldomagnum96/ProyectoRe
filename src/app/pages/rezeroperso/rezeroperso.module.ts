import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RezeropersoPageRoutingModule } from './rezeroperso-routing.module';

import { RezeropersoPage } from './rezeroperso.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RezeropersoPageRoutingModule,
    MatCardModule
  ],
  declarations: [RezeropersoPage]
})
export class RezeropersoPageModule {}
