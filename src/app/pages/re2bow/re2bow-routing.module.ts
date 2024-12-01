import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re2bowPage } from './re2bow.page';

const routes: Routes = [
  {
    path: '',
    component: Re2bowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re2bowPageRoutingModule {}
