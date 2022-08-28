import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./feature-modules/products/products.module').then((m) => m.ProductsModule)
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./feature-modules/orders/orders.module').then((m) => m.OrdersModule)
  },
  {
    path: 'orders/:id',
    loadChildren: () =>
      import('./feature-modules/order-details/order-details.module').then((m) => m.OrderDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
