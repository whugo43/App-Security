import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlicuotaPage } from './alicuota.page';

const routes: Routes = [
  {
    path: '',
    component: AlicuotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlicuotaPageRoutingModule {}
