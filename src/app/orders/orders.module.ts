import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { SuppliedOrdersComponent } from './supplied-orders/supplied-orders.component';
import { IntransitOrdersComponent } from './intransit-orders/intransit-orders.component';


@NgModule({
  declarations: [
    OrdersComponent,
    PendingOrdersComponent,
    SuppliedOrdersComponent,
    IntransitOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
