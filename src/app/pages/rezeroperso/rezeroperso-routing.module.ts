import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RezeropersoPage } from './rezeroperso.page';

const routes: Routes = [
  {
    path: '',
    component: RezeropersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RezeropersoPageRoutingModule {}
