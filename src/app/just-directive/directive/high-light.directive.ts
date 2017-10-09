import { Directive,ElementRef,HostListener,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[high-light]'
})
export class HighLightDirective {

  @Input()
  public highLightColor: string;

  @HostBinding('style.border')
  public border:string;

  constructor(private el:ElementRef) {
    // console.log(el);
    // el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.highlight(this.highLightColor);
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight(null)
  }
  @HostListener('click')
  onClick(){
    if(this.border){
      this.border="";
    }else{
      this.border="2px solid #666";
    }
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
