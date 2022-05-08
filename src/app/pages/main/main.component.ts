import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public totalItem : number = 0;
  public item: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.totalItem += 1;
  }

}
