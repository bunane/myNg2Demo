import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Borther1Component } from './borther-1.component';

describe('Borther1Component', () => {
  let component: Borther1Component;
  let fixture: ComponentFixture<Borther1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Borther1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Borther1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
