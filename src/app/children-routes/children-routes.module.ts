import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChildrenRoutesComponent } from './children-routes.component';
import { childrenRoutesRoutes } from './children-routes.routes';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';

import {AutoCompleteModule, TabViewModule, ButtonModule,MessagesModule,GrowlModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childrenRoutesRoutes),
    AutoCompleteModule,
    TabViewModule,
    ButtonModule,
    MessagesModule,
    GrowlModule
  ],
  declarations: [
    ChildrenRoutesComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent
  ]
})
export class ChildrenRoutesModule { }
