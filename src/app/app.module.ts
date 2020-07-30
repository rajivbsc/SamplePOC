import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {footerComponent} from './menu/footer.component'
import {RouterModule,RouterOutlet} from '@angular/router'
import {appRoutingModule} from './app-routing.module'
import {mapexComponent} from './rxjsExamples/mapex.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule, appRoutingModule],
  declarations: [ AppComponent, HelloComponent,footerComponent,mapexComponent ],
  bootstrap:    [ AppComponent ],
  schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
