import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re3histoPage } from './re3histo.page';

const routes: Routes = [
  {
    path: '',
    component: Re3histoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re3histoPageRoutingModule {}
