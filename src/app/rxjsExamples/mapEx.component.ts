
import { of } from 'rxjs'
import { map } from 'rxjs/operators';
import {Component} from '@angular/core'
@Component
({
  selector:'mapsex',
  template:'<div>{{squaredNums}}</div>'
})
export class mapExComponent
{
constructor()
{
const nums = of(1, 2, 3);

const squareValues = map((val: number) => val * val);
const squaredNums = squareValues(nums);

squaredNums.subscribe(x => console.log(x));
}
}