import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../services/cart-api.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api: CartApiService) { }
  
  products: Item[];
  show: boolean = false;

  ngOnInit(): void {
    this.getAllItems();
  }

  deleteProduct(id: number) {
    console.log(id);
    this.api.deleteItem(id).subscribe((res: Item) => {
      console.log(res);
      this.getAllItems();
    });
  }

  addProduct(item: Item){
    this.api.addItem(item).subscribe((res: Item) => {
      console.log(res);
      this.getAllItems();
    });
  }

  getAllItems() { 
    this.api.getAllItems().subscribe((res: Item[]) => {
      this.products = res;
      this.products.forEach(element => {
        element.price = parseFloat((element.price * .01).toFixed(2));
      })
    });
  }

  showForm() {
    this.show = !this.show;
  }

}
