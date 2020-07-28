import { Component, VERSION } from '@angular/core';
import {footerComponent} from './menu/footer.component'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
