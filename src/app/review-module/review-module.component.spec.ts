import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewModuleComponent } from './review-module.component';

describe('ReviewModuleComponent', () => {
  let component: ReviewModuleComponent;
  let fixture: ComponentFixture<ReviewModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
