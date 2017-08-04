# 第一个ng-cli项目

##安装开发环境 

>npm install @angular-cli -g

>cd xxx

>cnpm install


##开发命令 默认端口是 4200 具体怎么改.我不告诉你:) 在命令行里面修改就可以了

启动
>ng serve

打包
>ng build --prod



具体怎么安装这个环境

>cnpm install @angular-cli



Component 组件
>ng g component my-new-component

Directive 指令
>ng g directive my-new-directive

Pipe 管道
>ng g pipe my-new-pipe

Service 服务
>ng g service my-new-service

Class 类
>ng g class my-new-class

Interface 类似dto的东西 我们应该用不到
>ng g interface my-new-interface

Enum 枚举
>ng g enum my-new-enum

Module 模块
>ng g module my-module

打包命令
>ng build 

>ng build --prod

>ng build --prod --aot 

同理这个服务可以直接运用于别的地方.下面我们开始起飞吧:)
>ng serve --prod

>ng serve --prod --aot 





# MyStartProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
