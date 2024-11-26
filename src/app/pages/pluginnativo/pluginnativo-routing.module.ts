import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PluginnativoPage } from './pluginnativo.page';

const routes: Routes = [
  {
    path: '',
    component: PluginnativoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PluginnativoPageRoutingModule {}
