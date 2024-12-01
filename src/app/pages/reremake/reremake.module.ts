import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReremakePageRoutingModule } from './reremake-routing.module';

import { ReremakePage } from './reremake.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReremakePageRoutingModule,
    MatCardModule
  ],
  declarations: [ReremakePage]
})
export class ReremakePageModule {}
