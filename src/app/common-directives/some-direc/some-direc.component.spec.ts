import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDirecComponent } from './some-direc.component';

describe('SomeDirecComponent', () => {
  let component: SomeDirecComponent;
  let fixture: ComponentFixture<SomeDirecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeDirecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
