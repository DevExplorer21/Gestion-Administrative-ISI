import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcutePageRoutingModule } from './excute-routing.module';

import { ExcutePage } from './excute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExcutePageRoutingModule
  ],
  declarations: [ExcutePage]
})
export class ExcutePageModule {}
