import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildContentComponent } from './content-child-content.component';

describe('ContentChildContentComponent', () => {
  let component: ContentChildContentComponent;
  let fixture: ComponentFixture<ContentChildContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentChildContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentChildContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
