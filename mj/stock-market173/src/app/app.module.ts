// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// our Module(s)
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';


@NgModule({// [TypeScript annotation/decorator] mark this class definition as an Angular module
  declarations: [
    // declarations marking out which component(s) and directive(s) can be used within the application
    AppComponent,
    StockItemComponent
  ],
  imports: [
    // importing other modules that provide functionality needed in the application
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]// entry point component for starting the application
})
export class AppModule { }
