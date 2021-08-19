import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { HomeCustomersComponent } from './home-customers/home-customers.component';
import { HwCustomersComponent } from './hw-customers/hw-customers.component';
import { ItCustomersComponent } from './it-customers/it-customers.component';

const routes: Routes = [
  { 
    path: '', 
    component: CustomersComponent 
  },
  { 
    path: 'home', 
    component: HomeCustomersComponent 
  },
  { 
    path: 'hardware', 
    component: HwCustomersComponent 
  },
  { 
    path: 'information-technology', 
    component: ItCustomersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
