import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {


  categorys: Category[] = [];
  categoryAddNew: Category;
  categoryDelete: Category = {
    id: 0,
    nameCategory: ''
  };
  categoryForm = new FormGroup(
    {
      nameCategory: new FormControl('', [Validators.required])
    }
  );
  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe(value => {
      this.categorys = value;
    });
  }

  addNew() {
    this.categoryAddNew = this.categoryForm.value;
    this.categoryService.save(this.categoryAddNew).subscribe(res => {},
      error => {},
      () => {this.getAll();
      });

  }

  deleteCategory(id: number) {
    this.categoryService.delete(id).subscribe(res => {
      this.getAll();
    });
  }
  getCategory(category: Category) {
    this.categoryDelete = category;
  }
}
