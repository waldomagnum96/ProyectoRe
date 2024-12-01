import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReremakehistoriaPage } from './reremakehistoria.page';

const routes: Routes = [
  {
    path: '',
    component: ReremakehistoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReremakehistoriaPageRoutingModule {}
