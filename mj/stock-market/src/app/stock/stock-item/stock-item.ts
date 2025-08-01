import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css'
})
export class StockItem implements OnInit {
  public name: string = "";
  public code: string = "";
  public price: number = 0;
  public previousPrice: number = 0;
  public positiveChange: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.name = "Slickhouse";
    this.code = "SHP";
    this.price = 85;
    this.previousPrice = 80;
    this.positiveChange = this.price >= this.previousPrice;

    /*for (let index = 0; index < 10; index++) {
      (async () => {
        console.log("before delay");
        await this.delay(1000);
        this.updatePrice;
        console.log("after delay");
      })();
    }*/
  }

  /*updatePrice(): void {
    this.price++;
  }*/

  // https://community.lambdatest.com/t/how-to-implement-delay-in-typescript-for-redirect-after-form-submission/31676
  /*delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }*/
}
