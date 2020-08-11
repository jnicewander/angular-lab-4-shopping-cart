import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000/cart-items';

  // Add a getAllItems() method that uses http to make a GET request to your /cart-items API endpoint. 
  getAllItems() {
    return this.http.get(this.baseUrl);
  }

  // Add a deleteItem(id:number) method that uses http to make a DELETE request to your /cart-items/:id API endpoint.
  deleteItem(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  // Add an addItem(item:Item) method that uses http to make a POST request to your /cart-items API endpoint.
  addItem(item: Item) {
    return this.http.post(this.baseUrl, item);
  }
}
