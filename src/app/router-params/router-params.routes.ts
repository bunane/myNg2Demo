import { Routes } from '@angular/router';
import { RouterParamsComponent } from './router-params.component';
import { PicComponent } from './pic/pic.component';
import { TxtComponent } from './txt/txt.component'

export const routerParamsRoutes:Routes=[
	{
        path:'',
        component:RouterParamsComponent,
        children: [
            {
                path: '',
                redirectTo: 'pic',
                pathMatch: 'full'
            },
            {
                path: 'pic/:page',
                component: PicComponent
            },
            {
                path: 'txt',
                component: TxtComponent
            },
            {
                path: '**',
                component: PicComponent
            }
        ]
    }
];