import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Borther2Component } from './borther-2.component';

describe('Borther2Component', () => {
  let component: Borther2Component;
  let fixture: ComponentFixture<Borther2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Borther2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Borther2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
