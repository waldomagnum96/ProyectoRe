import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReremakebowPage } from './reremakebow.page';

const routes: Routes = [
  {
    path: '',
    component: ReremakebowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReremakebowPageRoutingModule {}
