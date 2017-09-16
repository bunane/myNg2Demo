import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommunicationComponent } from './communication.component';
import { communicationRoutes } from './communication.routes';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';

import { ButtonModule } from 'primeng/primeng'


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(communicationRoutes),
    ButtonModule
  ],
  declarations: [
    CommunicationComponent,
    ParentAndChildComponent,
    ChildComponent
  ]
})
export class CommunicationModule { }
