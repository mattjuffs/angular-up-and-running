// component definition
import { Component, OnInit } from '@angular/core';

import {Stock} from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {// implement OnInit interface, from Angular

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

  constructor() { }

  ngOnInit() {// triggered when a component is initialised
    // initialise the values for the fields
    /*this.name = "Test Stock Company";
    this.code = "TSC";
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = (this.price >= this.previousPrice);
    this.favourite = false;*/

    this.stock = new Stock("Test Stock Company", "TSC", 85, 80);
  }

  // event function - trigger on click
  toggleFavourite(event) {
    console.log("toggleFavourite() called!", event);
    //this.favourite = !this.favourite;

    // update the price
    //this.stock.previousPrice = this.stock.price;
    //this.stock.price = 75;

    this.stock.favourite = !this.stock.favourite;
  }
}
