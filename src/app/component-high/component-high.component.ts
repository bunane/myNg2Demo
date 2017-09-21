import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { flyIn } from '../animations/fly-in'
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component'
@Component({
  selector: 'app-component-high',
  templateUrl: './component-high.component.html',
  styleUrls: ['./component-high.component.less'],
  animations: [flyIn]
})
export class ComponentHighComponent implements OnInit {
  @ViewChild("dyncomp", { read: ViewContainerRef })
  dyncomp: ViewContainerRef;

  comp1: ComponentRef<DynamicChildComponent>;
  demo1: ComponentRef<DynamicChildComponent>;
  add1: ComponentRef<DynamicChildComponent>;

  constructor(
    public resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    const childComp = this.resolver.resolveComponentFactory(DynamicChildComponent);
    this.comp1 = this.dyncomp.createComponent(childComp);
    this.comp1.instance.title = "爸爸给的标题";
    this.comp1.instance.btnClick.subscribe((param) => {
      console.log("父的事件>>>>>>" + param)
    })

    this.demo1 = this.dyncomp.createComponent(childComp,0);
    this.demo1.instance.title = "我的index是0,我的父级没接收事件";

  }

  public delFn():void{
    this.comp1.destroy();
    this.demo1.destroy();
    this.add1.destroy();
  }
  public addFn():void{
    let addComp = this.resolver.resolveComponentFactory(DynamicChildComponent);
    this.add1 = this.dyncomp.createComponent(addComp);
    this.add1.instance.title = "new";
    this.add1.instance.btnClick.subscribe((param) => {
      console.log("父的事件，新添加的>>>>>"+param)
    })
  }

}
