import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepComponent } from './form-dep.component';

describe('FormDepComponent', () => {
  let component: FormDepComponent;
  let fixture: ComponentFixture<FormDepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
