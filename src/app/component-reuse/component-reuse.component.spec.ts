import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReuseComponent } from './component-reuse.component';

describe('ComponentReuseComponent', () => {
  let component: ComponentReuseComponent;
  let fixture: ComponentFixture<ComponentReuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentReuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentReuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
