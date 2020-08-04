import { Component, VERSION } from '@angular/core';
import {footerComponent} from './menu/footer.component'
import { of,pipe } from 'rxjs'
import { map,filter, catchError,retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'
import { IUserInfo } from './userInfo.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
  
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
    users:IUserInfo[]=[];
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
  //   for(var i in res.response)
  //   {
  //  let a = new userInfo(res.response[i].userId,res.response[i].title)
  //   }
   
  }
}),
catchError(err=>of([]))
);
userinfo.subscribe({
  next(x){
    console.log(x);},
  error(err){}
})
this.users = [{ username:'Rajeth',userId:1},{ username:'KADJ',userId:2},{ username:'GAYT',userId:3}];
for(let item of this.users)
{
  console.log(item.userId + ' ' +item.username);
}
this.users[2].userId=4;
  }
}
class userInfo {
    constructor(public userId: number, public title:string ) {
console.log(title);
    }
    log(user:userInfo)
    {
     
    }
}

