import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RezeroarmasPage } from './rezeroarmas.page';

const routes: Routes = [
  {
    path: '',
    component: RezeroarmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RezeroarmasPageRoutingModule {}
