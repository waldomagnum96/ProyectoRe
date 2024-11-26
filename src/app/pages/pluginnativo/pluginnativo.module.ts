import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PluginnativoPageRoutingModule } from './pluginnativo-routing.module';

import { PluginnativoPage } from './pluginnativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PluginnativoPageRoutingModule
  ],
  declarations: [PluginnativoPage]
})
export class PluginnativoPageModule {}
