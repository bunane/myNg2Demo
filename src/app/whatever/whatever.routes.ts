import { Routes } from '@angular/router';
import { WhateverComponent } from './whatever.component';
import { DemoTestComponent } from './demo-test/demo-test.component';

export const whateverRoutes=[
	{
        path:'',
        component:WhateverComponent,
        children:[{
            path:'',
            component: DemoTestComponent,
            // loadChildren:'../demo-test/post.module#PostModule'
        }]  
    }
];