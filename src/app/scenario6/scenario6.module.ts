import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Compo1Component, Compo2Component, Compo3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Compo1Component, Compo2Component]
})
export class Scenario6Module { }
