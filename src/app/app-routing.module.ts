import { Routes,RouterModule } from "@angular/router";
import { NgModule,Component } from '@angular/core';
import {lenovoComponent} from './mobiles/lenovo.component'
import {nokiaComponent} from './mobiles/nokia.component'
import {samsungComponent} from './mobiles/samsung.component'
import {compaqLaptopComponent} from './laptops/compaqlaptop.component'
import {dellLaptopComponent} from './laptops/delllaptop.component'
import {lenovoLaptopComponent} from './laptops/lenovolaptop.component'
const routes:Routes=[
{
    path:'lenovoMobile',
    component:lenovoComponent
},
{
    path:'nokiaMobile',
    component:nokiaComponent
},
{
    path:'samsungMobile',
    component:samsungComponent
}
,
{
    path:'compaqLaptop',
    component:compaqLaptopComponent
}
,
{
    path:'dellLaptop',
    component:dellLaptopComponent
}
,
{
    path:'lenovoLaptop',
    component:lenovoLaptopComponent
}
,
{
   path: '',
    redirectTo: '',
    pathMatch: 'full'
}
];
@NgModule(
{
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class appRoutingModule{}