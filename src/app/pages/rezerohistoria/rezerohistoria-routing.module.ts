import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RezerohistoriaPage } from './rezerohistoria.page';

const routes: Routes = [
  {
    path: '',
    component: RezerohistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RezerohistoriaPageRoutingModule {}
