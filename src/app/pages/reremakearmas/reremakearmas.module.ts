import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReremakearmasPageRoutingModule } from './reremakearmas-routing.module';

import { ReremakearmasPage } from './reremakearmas.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReremakearmasPageRoutingModule,
    MatCardModule
  ],
  declarations: [ReremakearmasPage]
})
export class ReremakearmasPageModule {}
