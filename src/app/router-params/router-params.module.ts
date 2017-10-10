import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { RouterParamsComponent } from './router-params.component';
import { routerParamsRoutes } from './router-params.routes';
import { PicComponent } from './pic/pic.component';
import { TxtComponent } from './txt/txt.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routerParamsRoutes)
  ],
  declarations: [RouterParamsComponent, PicComponent, TxtComponent]
})
export class RouterParamsModule { }
