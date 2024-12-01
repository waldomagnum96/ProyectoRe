import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Re2bowPageRoutingModule } from './re2bow-routing.module';

import { Re2bowPage } from './re2bow.page';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Re2bowPageRoutingModule,
    MatCardModule
  ],
  declarations: [Re2bowPage]
})
export class Re2bowPageModule {}
