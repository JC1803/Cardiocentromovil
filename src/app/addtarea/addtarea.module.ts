import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddtareaPage } from './addtarea.page';

const routes: Routes = [
  {
    path: '',
    component: AddtareaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AddtareaPage }])
  ],
  declarations: [AddtareaPage]
})
export class AddtareaPageModule {}
