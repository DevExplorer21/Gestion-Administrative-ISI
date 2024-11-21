import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomeRouter } from './home.router';


@NgModule({
imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    IonicModule, 
    HomeRouter
],
declarations: [HomePage]
})
export class HomePageModule {}