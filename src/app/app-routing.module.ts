import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products', 
    loadChildren: ()=> import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: 'cart', 
    loadChildren: () => import('./cart/cart.module').then(m=> m.CartModule) 
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  { 
      path: 'checkout', 
      loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  { path: '', redirectTo: 'products',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
