import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsChild1Component } from './ls-child1.component';

describe('LsChild1Component', () => {
  let component: LsChild1Component;
  let fixture: ComponentFixture<LsChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
