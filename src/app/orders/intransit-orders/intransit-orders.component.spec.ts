import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntransitOrdersComponent } from './intransit-orders.component';

describe('IntransitOrdersComponent', () => {
  let component: IntransitOrdersComponent;
  let fixture: ComponentFixture<IntransitOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntransitOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntransitOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
