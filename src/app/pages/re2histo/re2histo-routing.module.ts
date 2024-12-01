import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re2histoPage } from './re2histo.page';

const routes: Routes = [
  {
    path: '',
    component: Re2histoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re2histoPageRoutingModule {}
