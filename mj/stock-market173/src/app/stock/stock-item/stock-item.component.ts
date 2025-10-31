// component definition
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, SimpleChanges } from '@angular/core';

import {Stock} from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class StockItemComponent
implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit { // implement OnInit interface, from Angular

  @Input() public stock: Stock;
  @Output() private toggleFavourite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavourite = new EventEmitter<Stock>();
  }

  ngOnInit() {
    console.log('StockItem: OnInit');
  }

  onToggleFavourite(event) {
    this.toggleFavourite.emit(this.stock);
  }

  changeStockPrice() {
    this.stock.price += 5;
  }

  ngAfterViewInit() {
    console.log('StockItem: AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('StockItem: AfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('StockItem: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('StockItem: AfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('StockItem: DoCheck');
  }

  ngOnDestroy(): void {
    console.log('StockItem: OnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('StockItem: OnChanges - ', changes);
  }
}
