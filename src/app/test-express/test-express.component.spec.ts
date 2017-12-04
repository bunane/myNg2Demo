import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExpressComponent } from './test-express.component';

describe('TestExpressComponent', () => {
  let component: TestExpressComponent;
  let fixture: ComponentFixture<TestExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
