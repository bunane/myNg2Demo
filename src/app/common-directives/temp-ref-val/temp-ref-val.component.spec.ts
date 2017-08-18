import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefValComponent } from './temp-ref-val.component';

describe('TempRefValComponent', () => {
  let component: TempRefValComponent;
  let fixture: ComponentFixture<TempRefValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempRefValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRefValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
