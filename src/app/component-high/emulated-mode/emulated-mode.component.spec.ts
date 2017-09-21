import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedModeComponent } from './emulated-mode.component';

describe('EmulatedModeComponent', () => {
  let component: EmulatedModeComponent;
  let fixture: ComponentFixture<EmulatedModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulatedModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
