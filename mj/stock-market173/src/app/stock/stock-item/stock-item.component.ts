// component definition
import { Component, OnInit } from '@angular/core';

import {Stock} from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit { // implement OnInit interface, from Angular

  // define fields we want to access from the HTML
  /*
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favourite: boolean;
  */

  public stock: Stock;
  public stockClasses; // JSON object to hold the CSS classes
  public stockStyles; // JSON object to hold the CSS styles

  public stocks: Array<Stock>;

  constructor() { }

  ngOnInit() {// triggered when a component is initialised
    // initialise the values for the fields
    /*this.name = "Test Stock Company";
    this.code = "TSC";
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = (this.price >= this.previousPrice);
    this.favourite = false;*/

    // this.stock = new Stock("Test Stock Company", "TSC", 85, 80);

    // let diff = (this.stock.price / this.stock.previousPrice) - 1;
    // let largeChange = Math.abs(diff) > 0.01;

    /*this.stockClasses = {
        "positive": this.stock.isPositiveChange(),
        "negative": !this.stock.isPositiveChange(),
        "large-change": largeChange,
        "small-change": !largeChange
    };*/

    /*this.stockStyles = {
      "color": this.stock.isPositiveChange() ? "green" : "red",
      "font-size": largeChange ? "1.2em" : "0.8em"
    }*/

    // array of stocks
    this.stocks = [
      new Stock('1st Company', 'TSC', 85, 80, 'stock'),
      new Stock('2nd Company', 'SSC', 10, 20, 'mjtest'),
      new Stock('3rd Company', '3SC', 80, 80, 'stock'),
      new Stock('4th Company', '4SC', 876, 765, '')
    ];
  }

  // event function - trigger on click
  toggleFavourite(event, index) {
    console.log('toggleFavourite() called!', index, event);
    // this.favourite = !this.favourite;

    // update the price
    // this.stock.previousPrice = this.stock.price;
    // this.stock.price = 75;

    // this.stock.favourite = !this.stock.favourite;

    // using index (of array)
    this.stocks[index].favourite = !this.stocks[index].favourite;
  }

  // use this to track an object in an array by stock.code, rather than using the DOM object reference
  // helpful when reloading/amending the DOM and array, to keep track of items
  trackByStockCode(index, stock) {
    return stock.code;
  }
}
