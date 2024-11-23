import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiresidentPage } from './apiresident.page';

const routes: Routes = [
  {
    path: '',
    component: ApiresidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiresidentPageRoutingModule {}
