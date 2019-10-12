import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared';

import { GenderPipe } from './gender.pipe';
import { CrudShopComponent } from './crud-shop.component';
import { CustomersComponent } from '../Customers/customers.component';
import { ProductsComponent } from '../Products/products.component';
import { OrdersComponent } from '../Orders/orders.component';
import { ProductCategoriesComponent } from '../Products/product-categories.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: CrudShopComponent, children: [
          { path: '', redirectTo: 'customers' },
          { path: 'customers', component: CustomersComponent },
          { path: 'product-categories', component: ProductCategoriesComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'orders', component: OrdersComponent },
        ]
      }
    ])
  ],
  providers: [
    GenderPipe
  ],
  declarations: [
    CrudShopComponent,
    CustomersComponent,
    ProductsComponent,
    OrdersComponent,
    ProductCategoriesComponent,
    GenderPipe
  ]
})
export class CrudShopModule { }
