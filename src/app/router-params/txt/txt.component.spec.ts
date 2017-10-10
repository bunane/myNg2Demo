import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtComponent } from './txt.component';

describe('TxtComponent', () => {
  let component: TxtComponent;
  let fixture: ComponentFixture<TxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
