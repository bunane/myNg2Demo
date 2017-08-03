import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InjectionServiceComponent } from './injection-service/injection-service.component'

export const rootRouterConfig: Routes = [
    {
		path:'',
		redirectTo:'home',
		pathMatch:'full'
	},
    { 
        path: 'home',
        component: HomeComponent 
    },
    { 
        path: 'whatever',
        loadChildren: './whatever/whatever.module#WhateverModule' 
    },
    {
        path: 'childrenRoutes',
        loadChildren: './children-routes/children-routes.module#ChildrenRoutesModule'
    },
    {
        path: 'componentReuse',
        loadChildren: './component-reuse/component-reuse.module#ComponentReuseModule'
    },
    {
        path: 'injectionService',
        component: InjectionServiceComponent
    },
    {
        path: 'primengUi',
        loadChildren: './primeng-ui/primeng-ui.module#PrimengUiModule'
    },
    {
        path: 'commonDirectives',
        loadChildren: './common-directives/common-directives.module#CommonDirectivesModule'
    },



]