import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReremakePage } from './reremake.page';

const routes: Routes = [
  {
    path: '',
    component: ReremakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReremakePageRoutingModule {}
