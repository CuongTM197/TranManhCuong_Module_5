import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Product} from '../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categoryObj: Category[] = [];
  products: Product;
  editForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('')
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productService.findById(id).subscribe(value => {
      this.products = value;
      this.editForm.patchValue(this.products);
    });
  }

  getCategory() {
    this.productService.getCategory().subscribe(value => {
      this.categoryObj = value;
    });
  }
  onsubmit() {
    const product = this.editForm.value;
    product.id = this.products.id;
    this.productService.updateProduct(this.products.id, this.editForm.value).subscribe(res => {
      this.router.navigateByUrl('');
      this.editForm.reset();
    });
  }
  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

}
