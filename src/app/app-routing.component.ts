import { Routes,RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const routes:Routes=[
{
    path:'LenovoMobile',
    loadChildren:'./mobile/lenovo.component#lenovoComponent'
},
{
    path:'NokiaMobile',
    loadChildren:'./mobile/nokia.component#nokiaComponent'
},
{
    path:'SamsungMobile',
    loadChildren:'./mobile/samsung.component#samsungComponent'
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