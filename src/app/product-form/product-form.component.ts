import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() hideForm = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(addProductForm: NgForm) {
    this.onSubmit.emit({
      product: addProductForm.value.product,
      price: addProductForm.value.price,
      quantity: addProductForm.value.quantity
    });
    addProductForm.reset();
    this.hideForm.emit()
  }

  closeForm() {
    this.hideForm.emit();
  }
}
