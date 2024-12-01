import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReremakebowPageRoutingModule } from './reremakebow-routing.module';

import { ReremakebowPage } from './reremakebow.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReremakebowPageRoutingModule,
    MatCardModule
  ],
  declarations: [ReremakebowPage]
})
export class ReremakebowPageModule {}
