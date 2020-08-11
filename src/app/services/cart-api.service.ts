import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor() { }

  getAllItems() {
    // Add a getAllItems() method that uses http to make a GET request to your /cart-items API endpoint. 
  }

  deleteItem() {
    // Add a deleteItem(id:number) method that uses http to make a DELETE request to your /cart-items/:id API endpoint.
  }

  addItem() {
    // Add an addItem(item:Item) method that uses http to make a POST request to your /cart-items API endpoint.
  }
}
