import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InjectionServiceComponent } from './injection-service/injection-service.component';

export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
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
    {
        path: 'communication',
        loadChildren: './communication/communication.module#CommunicationModule'
    },
    {
        path: 'lifecycle',
        loadChildren: './lifecycle/lifecycle.module#LifecycleModule'
    },
    {
        path: 'componentHigh',
        loadChildren: './component-high/component-high.module#ComponentHighModule'
    },
    {
        path: 'justDirective',
        loadChildren: './just-directive/just-directive.module#JustDirectiveModule'
    },
    {
        path: 'reviewModule',
        loadChildren: './review-module/review-module.module#ReviewModuleModule'
    },
    {
        path: 'routerParams',
        loadChildren: './router-params/router-params.module#RouterParamsModule'
    },
    {
        path: 'rxjs',
        loadChildren: './rxjs/rxjs.module#RxjsModule'
    },
    {
        path: 'express',
        loadChildren: './test-express/test-express.module#TestExpressModule'
    },


    {
        path: '**',
        component: HomeComponent
    }



]