import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurVichaarComponent } from './gur-vichaar.component';

describe('GurVichaarComponent', () => {
  let component: GurVichaarComponent;
  let fixture: ComponentFixture<GurVichaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurVichaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurVichaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
