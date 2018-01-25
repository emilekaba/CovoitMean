import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrajetComponent } from './search-trajet.component';

describe('SearchTrajetComponent', () => {
  let component: SearchTrajetComponent;
  let fixture: ComponentFixture<SearchTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
