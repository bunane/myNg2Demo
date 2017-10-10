import { Component, OnInit, ContentChild,ContentChildren,QueryList } from '@angular/core';
import { ContentChildContentComponent } from '../content-child-content/content-child-content.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.less']
})
export class ContentChildComponent implements OnInit {
  // @ContentChild(ContentChildContentComponent)
  // contentChildContent:ContentChildContentComponent;
  @ContentChildren(ContentChildContentComponent)
  contentChildContentList:QueryList<ContentChildContentComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    // console.log(this.contentChildContent);
    this.contentChildContentList.forEach((item)=>{
      console.log(item);
    })
  }

}
