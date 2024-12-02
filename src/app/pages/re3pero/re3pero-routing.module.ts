import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re3peroPage } from './re3pero.page';

const routes: Routes = [
  {
    path: '',
    component: Re3peroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re3peroPageRoutingModule {}
