import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDirectivesComponent } from './common-directives.component';

describe('CommonDirectivesComponent', () => {
  let component: CommonDirectivesComponent;
  let fixture: ComponentFixture<CommonDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
