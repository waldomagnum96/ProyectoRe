import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Re2persoPage } from './re2perso.page';

const routes: Routes = [
  {
    path: '',
    component: Re2persoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Re2persoPageRoutingModule {}
