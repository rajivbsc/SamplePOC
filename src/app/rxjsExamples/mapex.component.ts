
import { of } from 'rxjs'
import { map } from 'rxjs/operators';
import {Component} from '@angular/core'
import { IUserInfo } from '../userInfo.component';

@Component
({
  selector:'mapex',
  template:'<div></div>'
})
export class mapexComponent
{

constructor()
{
const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));

}
}