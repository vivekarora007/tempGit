import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliedOrdersComponent } from './supplied-orders.component';

describe('SuppliedOrdersComponent', () => {
  let component: SuppliedOrdersComponent;
  let fixture: ComponentFixture<SuppliedOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliedOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
