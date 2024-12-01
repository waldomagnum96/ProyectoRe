import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re3Page } from './re3.page';

const routes: Routes = [
  {
    path: '',
    component: Re3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re3PageRoutingModule {}
