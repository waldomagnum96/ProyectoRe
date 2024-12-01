import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re3PageRoutingModule } from './re3-routing.module';

import { Re3Page } from './re3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re3PageRoutingModule
  ],
  declarations: [Re3Page]
})
export class Re3PageModule {}
