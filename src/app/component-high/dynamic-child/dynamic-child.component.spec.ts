import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChildComponent } from './dynamic-child.component';

describe('DynamicChildComponent', () => {
  let component: DynamicChildComponent;
  let fixture: ComponentFixture<DynamicChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
