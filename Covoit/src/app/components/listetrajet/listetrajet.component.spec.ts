import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetrajetComponent } from './listetrajet.component';

describe('ListetrajetComponent', () => {
  let component: ListetrajetComponent;
  let fixture: ComponentFixture<ListetrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
