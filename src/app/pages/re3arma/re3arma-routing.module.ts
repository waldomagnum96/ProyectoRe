import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re3armaPage } from './re3arma.page';

const routes: Routes = [
  {
    path: '',
    component: Re3armaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re3armaPageRoutingModule {}
