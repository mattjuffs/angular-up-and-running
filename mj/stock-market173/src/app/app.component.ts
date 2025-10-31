import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges  } from '@angular/core';// life-cycle
import { Stock } from './model/stock';

@Component({
  selector: 'app-root', // DOM selector that gets translated into an instance of this component
  templateUrl: './app.component.html', // HTML template backing this component
  styleUrls: ['./app.component.css'], // CSS file(s) specific to this component
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent
implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  title = 'app'; // component class with its own members/properties and functions/methods

  // load and hold all the data necessary, for rendering the component
  name = 'Matt';

  // handle and process any events that may arise from any element, within the component

  public stock: Stock;
  private counter: number = 1;

  ngOnInit(): void {
    console.log('App: OnInit');
    this.stock = new Stock('Test Stock Co.' + this.counter++, 'TSC', 85, 80);
  }

  onToggleFavourite(stock: Stock) {
    console.log('Favourite for stock: ', stock, ' was triggered');
    this.stock.favourite = !this.stock.favourite;
  }

  changeStockObject() {
    this.stock = new Stock('Test Stock Co.' + this.counter++, 'TSC', 85, 80);
  }

  changeStockPrice() {
    this.stock.price += 10;
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }

  // life-cycle events
  ngAfterViewInit() {
    console.log('App: AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('App: AfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('App: AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('App: AfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('App: DoCheck');
  }

  ngOnDestroy(): void {
    console.log('App: OnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('App: OnChanges - ', changes);
  }
}
