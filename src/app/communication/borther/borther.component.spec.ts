import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BortherComponent } from './borther.component';

describe('BortherComponent', () => {
  let component: BortherComponent;
  let fixture: ComponentFixture<BortherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BortherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BortherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
