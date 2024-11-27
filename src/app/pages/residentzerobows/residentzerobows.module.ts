import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidentzerobowsPageRoutingModule } from './residentzerobows-routing.module';

import { ResidentzerobowsPage } from './residentzerobows.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidentzerobowsPageRoutingModule,
    MatCardModule
  ],
  declarations: [ResidentzerobowsPage]
})
export class ResidentzerobowsPageModule {}
