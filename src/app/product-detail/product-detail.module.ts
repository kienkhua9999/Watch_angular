import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductDetailComponent],
  providers: [LazyLoadScriptService]
})
export class ProductDetailModule { }
