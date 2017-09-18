import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsChild2Component } from './ls-child2.component';

describe('LsChild2Component', () => {
  let component: LsChild2Component;
  let fixture: ComponentFixture<LsChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
