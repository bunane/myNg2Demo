import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengUiComponent } from './primeng-ui.component';

describe('PrimengUiComponent', () => {
  let component: PrimengUiComponent;
  let fixture: ComponentFixture<PrimengUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
