import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCustomersComponent } from './it-customers.component';

describe('ItCustomersComponent', () => {
  let component: ItCustomersComponent;
  let fixture: ComponentFixture<ItCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
