import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntransitOrdersComponent } from './intransit-orders/intransit-orders.component';
import { OrdersComponent } from './orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { SuppliedOrdersComponent } from './supplied-orders/supplied-orders.component';

const routes: Routes = 
  [
    { 
      path: '', 
      component: OrdersComponent 
    },
    { 
      path: 'in-transit', 
      component: IntransitOrdersComponent 
    },
    { 
      path: 'pending', 
      component: PendingOrdersComponent 
    },
    { 
      path: 'supplied', 
      component: SuppliedOrdersComponent 
    },
    {
      path: '',
      redirectTo: 'in-transit',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
