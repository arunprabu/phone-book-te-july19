import { Component, OnInit } from '@angular/core';
import { ShoppingCartDataService } from 'src/app/shared/services/shopping-cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  cartItemList: any[];

  constructor( private shoppingCartDataService: ShoppingCartDataService) { }

  ngOnInit() {
    this.shoppingCartDataService.latestCartItems.subscribe(value => {
      console.log(value);
      this.cartItemList = value;
    })
  }

}
