import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,   // ng if, for 
    RouterModule,
    ProductRoutingModule // routing paths of product features
  ]
})
export class ProductsModule { }
