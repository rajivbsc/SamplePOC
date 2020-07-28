import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {footerComponent} from './menu/footer.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,footerComponent ],
  bootstrap:    [ AppComponent ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
