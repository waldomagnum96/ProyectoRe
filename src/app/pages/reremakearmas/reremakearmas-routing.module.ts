import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReremakearmasPage } from './reremakearmas.page';

const routes: Routes = [
  {
    path: '',
    component: ReremakearmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReremakearmasPageRoutingModule {}
