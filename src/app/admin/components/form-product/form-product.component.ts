import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { CustomValidators } from '../../../utils/custom-validators';
import { ProductsService } from './../../../core/services/products/products.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  imageURL$: Observable<any>;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product).subscribe((createdProduct) => {
        this.router.navigate(['/admin/products']);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, CustomValidators.isValidPrice]],
      image: '',
      description: ['', [Validators.required]],
    });
  }

  get priceField() {
    return this.form.get('price');
  }

  uploadFile(event) {
    const file = event.target.files[0];
    console.log(file);
    const dir = 'images';
    const fileRef = this.storage.ref(dir);
    const task = this.storage.upload(dir, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.imageURL$ = fileRef.getDownloadURL();
          this.imageURL$.subscribe((url) => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }
}
