import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [Com1Component, Com2Component],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports:[Com1Component,Com2Component]
})
export class Scenario7Module { }
