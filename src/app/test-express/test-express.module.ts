import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { TestExpressComponent } from './test-express.component';
import {testExpressRoutes } from './test-express.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(testExpressRoutes),
    HttpModule
  ],
  declarations: [TestExpressComponent]
})
export class TestExpressModule { }
