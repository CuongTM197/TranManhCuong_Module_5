import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {Category} from '../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productAddNew: Product;
  categoryObj: Category[] = [];
  productDelete: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    category: {
      id: 1,
      nameCategory: 'Apple'
    }
  };
  productForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('')
    }
  );
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
    this.getCategory();
  }
  getAll() {
    this.productService.getAll().subscribe(value => {
      this.products = value;
    });
  }

  addNew() {
    this.productAddNew = this.productForm.value;
    this.productService.save(this.productAddNew).subscribe(res => {},
      error => {},
      () => {this.getAll();
    });

  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(res => {
      this.getAll();
    });
  }

  getCategory() {
    this.productService.getCategory().subscribe(value => {
      this.categoryObj = value;
    });
  }

  getProduct(product: Product) {
    this.productDelete = product;
  }
}
