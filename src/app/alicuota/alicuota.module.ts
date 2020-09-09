import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlicuotaPageRoutingModule } from './alicuota-routing.module';

import { AlicuotaPage } from './alicuota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlicuotaPageRoutingModule
  ],
  declarations: [AlicuotaPage]
})
export class AlicuotaPageModule {}
