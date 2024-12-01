import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re3bowPage } from './re3bow.page';

const routes: Routes = [
  {
    path: '',
    component: Re3bowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re3bowPageRoutingModule {}
