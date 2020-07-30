import {Component} from '@angular/core'

@Component({
selector:'dellLaptop',
template:`<h1>Dell Laptop</h1><mapsex></mapsex>
<img src="data:image/jpeg;base64,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"/>
`
})

export class dellLaptopComponent
{}