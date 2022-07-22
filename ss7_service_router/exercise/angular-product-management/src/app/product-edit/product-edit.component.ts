import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const productId = Number(this.activatedRoute.snapshot.params.productId);
    const product = this.getProduct(productId);

    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description)
    });
  }

  updateInfoProduct(): void {
    this.router.navigateByUrl('/product/list');
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }
  updateProduct() {
    console.log(this.productForm.value);
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    alert('Update success');
  }
}
