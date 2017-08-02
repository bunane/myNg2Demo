import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionServiceComponent } from './injection-service.component';

describe('InjectionServiceComponent', () => {
  let component: InjectionServiceComponent;
  let fixture: ComponentFixture<InjectionServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectionServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
