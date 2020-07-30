import { Component, VERSION } from '@angular/core';
import {footerComponent} from './menu/footer.component'
import { of,pipe } from 'rxjs'
import { map,filter, catchError,retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  constructor()
  {
    const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);
squaredNums.subscribe(x => console.log(x));
const oddValues = pipe(filter((n:number)=>n%2!=0),map(v => v * v));
const oddNums = oddValues(nums);
oddNums.subscribe(x => console.log(x));
const userinfo = ajax('https://jsonplaceholder.typicode.com/todos/').pipe(retry(3),map(res=>{
  if (res.response) {
    for(let item in res.response)
    {
   
    }
   
  }
}),
catchError(err=>of([]))
);
userinfo.subscribe({
  next(x){
    console.log(x);},
  error(err){}
})
  }
}
class userInfo {
    constructor(public userId: number, public title:string ) {}
    log(item:userInfo)
    {
     console.log('${item.title}');
    }
}

