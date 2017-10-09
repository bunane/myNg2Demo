import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustDirectiveComponent } from './just-directive.component';

describe('JustDirectiveComponent', () => {
  let component: JustDirectiveComponent;
  let fixture: ComponentFixture<JustDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
