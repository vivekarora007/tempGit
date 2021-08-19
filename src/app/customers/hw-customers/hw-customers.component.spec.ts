import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwCustomersComponent } from './hw-customers.component';

describe('HwCustomersComponent', () => {
  let component: HwCustomersComponent;
  let fixture: ComponentFixture<HwCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
