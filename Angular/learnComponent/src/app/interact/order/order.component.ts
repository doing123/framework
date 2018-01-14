import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // 装饰器: 父组件传递数据到子组件的方式，（单向传递）写在子组件中
  /*@Input() // 可写别名
  stockCode: string;*/

  _stockCode: string;

  @Input() // defineProperty(obj,key,{});
  set stockCode(stockCode: string){
    this._stockCode = stockCode + 'doing';
  }
  get stockCode(): string {
    return this._stockCode;
  }

  @Input()
  amount: number;

  names: string = 'doing123';

  /*@Input()
  priceQuote: PriceQuote;*/

  constructor() {
    this.amount = 200;
    setInterval(() => {
      this.stockCode = '000001';
    }, 3000);
  }

  ngOnInit() {
  }

}
