import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachanComponent } from './bachan.component';

describe('BachanComponent', () => {
  let component: BachanComponent;
  let fixture: ComponentFixture<BachanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
