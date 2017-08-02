import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenRoutesComponent } from './children-routes.component';

describe('ChildrenRoutesComponent', () => {
  let component: ChildrenRoutesComponent;
  let fixture: ComponentFixture<ChildrenRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
