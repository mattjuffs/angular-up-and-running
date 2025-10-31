import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // DOM selector that gets translated into an instance of this component
  templateUrl: './app.component.html', // HTML template backing this component
  styleUrls: ['./app.component.css']// CSS file(s) specific to this component
})
export class AppComponent {
  title = 'app'; // component class with its own members/properties and functions/methods

  // load and hold all the data necessary, for rendering the component
  name = 'Matt';

  // handle and process any events that may arise from any element, within the component
}
