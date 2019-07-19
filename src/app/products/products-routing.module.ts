import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const PRODUCT_ROUTES: Routes = [
  //syntax : path should have string and the component when that path is hit
  { path: "products", children: [
        { path: '',  component: ProductsComponent },
        { path: 'cart', component: CartComponent },
        { path: ':id', component: ProductDetailsComponent}
    ] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
