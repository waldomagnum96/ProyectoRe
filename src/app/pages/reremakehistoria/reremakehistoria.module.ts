import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReremakehistoriaPageRoutingModule } from './reremakehistoria-routing.module';

import { ReremakehistoriaPage } from './reremakehistoria.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReremakehistoriaPageRoutingModule,
    MatCardModule
  ],
  declarations: [ReremakehistoriaPage]
})
export class ReremakehistoriaPageModule {}
