import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestComponent } from './demo-test.component';

describe('DemoTestComponent', () => {
  let component: DemoTestComponent;
  let fixture: ComponentFixture<DemoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
