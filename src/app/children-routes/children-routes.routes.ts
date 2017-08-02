import { Routes } from '@angular/router';
import { ChildrenRoutesComponent } from './children-routes.component';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';

export const childrenRoutesRoutes=[
	{
        path:'',
        component:ChildrenRoutesComponent,
        children:[
            {
                path:'',
                redirectTo:'pageA',
                pathMatch:'full'
            },
            {
                path:'pageA',
                component: PageAComponent
            },
            {
                path:'pageB',
                component: PageBComponent
            },
            {
                path:'pageC',
                component: PageCComponent
            },
        ]  
    }
];