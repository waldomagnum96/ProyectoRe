import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReremakepersoPageRoutingModule } from './reremakeperso-routing.module';

import { ReremakepersoPage } from './reremakeperso.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReremakepersoPageRoutingModule,
    MatCardModule
  ],
  declarations: [ReremakepersoPage]
})
export class ReremakepersoPageModule {}
