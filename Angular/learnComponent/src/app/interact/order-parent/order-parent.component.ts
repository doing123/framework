import {Component, OnInit, ViewChild} from '@angular/core';
import {PriceQuote} from '../price-quote/price-quote.component';
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent implements OnInit {

  @ViewChild(OrderComponent) order: OrderComponent;

  amount: number = 111111;

  priceQuote: PriceQuote = new PriceQuote('', 0);

  constructor() {
  }

  ngOnInit() {
    console.log('这是在父组件order中打印的话：' + this.order.names);
    console.log('这是在父组件order中打印的话：' + this.order.stockCode);
    console.log('这是在父组件order中打印的话：' + this.order.amount);
  }

  buyHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

}
