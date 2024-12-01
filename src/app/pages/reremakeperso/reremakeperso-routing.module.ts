import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReremakepersoPage } from './reremakeperso.page';

const routes: Routes = [
  {
    path: '',
    component: ReremakepersoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReremakepersoPageRoutingModule {}
