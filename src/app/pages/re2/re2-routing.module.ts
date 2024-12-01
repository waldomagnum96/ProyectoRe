import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re2Page } from './re2.page';

const routes: Routes = [
  {
    path: '',
    component: Re2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re2PageRoutingModule {}
