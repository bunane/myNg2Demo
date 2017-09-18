import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommunicationComponent } from './communication.component';
import { communicationRoutes } from './communication.routes';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';

import { ButtonModule } from 'primeng/primeng';
import { BortherComponent } from './borther/borther.component';
import { Borther1Component } from './borther/borther-1/borther-1.component';
import { Borther2Component } from './borther/borther-2/borther-2.component';
import { EventBusService } from './borther/service/event-bus.service';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LsChild1Component } from './local-storage/ls-child1/ls-child1.component';
import { LsChild2Component } from './local-storage/ls-child2/ls-child2.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(communicationRoutes),
    ButtonModule
  ],
  declarations: [
    CommunicationComponent,
    ParentAndChildComponent,
    ChildComponent,
    BortherComponent,
    Borther1Component,
    Borther2Component,
    LocalStorageComponent,
    LsChild1Component,
    LsChild2Component,
  ],
  providers: [
    EventBusService
  ]
})
export class CommunicationModule { }
