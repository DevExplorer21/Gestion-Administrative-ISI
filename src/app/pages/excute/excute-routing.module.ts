import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcutePage } from './excute.page';

const routes: Routes = [
  {
    path: '',
    component: ExcutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcutePageRoutingModule {}
