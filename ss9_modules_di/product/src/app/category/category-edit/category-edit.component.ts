import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  categorys: Category;
  editForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      nameCategory: new FormControl('', [Validators.required]),
    });
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.categoryService.findById(id).subscribe(value => {
      this.categorys = value;
      this.editForm.patchValue(this.categorys);
    });
  }
  onsubmit() {
    const category = this.editForm.value;
    category.id = this.categorys.id;
    this.categoryService.updateCategory(this.categorys.id, this.editForm.value).subscribe(res => {
      this.router.navigateByUrl('');
      this.editForm.reset();
    });
  }

}
