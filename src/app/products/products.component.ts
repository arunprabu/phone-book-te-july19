import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShoppingCartDataService } from '../shared/services/shopping-cart-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit {

  productList: any[];

  constructor( private product: Product, 
    private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.productList = this.product.getProductList();
  }

  onAddToCart( product ){
    //update the original cartItems in service
    this.shoppingCartDataService.updateCartItems(product)

  }
}
