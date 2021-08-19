import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ItCustomersComponent } from './it-customers/it-customers.component';
import { HomeCustomersComponent } from './home-customers/home-customers.component';
import { HwCustomersComponent } from './hw-customers/hw-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ItCustomersComponent,
    HomeCustomersComponent,
    HwCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
