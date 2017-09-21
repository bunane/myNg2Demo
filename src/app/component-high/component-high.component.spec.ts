import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHighComponent } from './component-high.component';

describe('ComponentHighComponent', () => {
  let component: ComponentHighComponent;
  let fixture: ComponentFixture<ComponentHighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
