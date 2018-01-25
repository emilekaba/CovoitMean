import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrajetComponent } from './top-trajet.component';

describe('TopTrajetComponent', () => {
  let component: TopTrajetComponent;
  let fixture: ComponentFixture<TopTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
