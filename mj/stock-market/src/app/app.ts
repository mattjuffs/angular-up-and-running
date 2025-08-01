import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockItem } from './stock/stock-item/stock-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,StockItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stock-market');
}
