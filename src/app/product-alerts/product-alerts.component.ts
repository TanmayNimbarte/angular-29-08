import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input()
  productI !: Product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}

// @Component(
//   {
//     selector: 'app-pac',
//     templateUrl: './pac.component.html',
//     styleUrls: ['./pac.component.css']
//   }
// )
// export class PAC{
  
// }