import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Item;
  
  constructor() { }

  ngOnInit(): void {
  }

}
