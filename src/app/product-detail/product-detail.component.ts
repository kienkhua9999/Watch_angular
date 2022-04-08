import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../home/Product';
import { ProductServiceService } from '../home/ProductService.service';
import { LazyLoadScriptService } from '../lazy-load-script.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  proId:any;
  prod:Product =new Product();
  constructor( private rout:ActivatedRoute, private service: ProductServiceService, private  lazyLoadService: LazyLoadScriptService) { }

  ngOnInit() {
    this.detailProduct();
    this.lazyLoadService.loadScript('../assets/js/main.js'), 
  this.lazyLoadService.loadScript('../assets/js/bootstrap.bundle.min.js'),
  this.lazyLoadService.loadScript('../assets/js/ajax-mail.js'),
  this.lazyLoadService.loadScript('../assets/js/plugins.js'),
  this.lazyLoadService.loadScript('../assets/js/vendor/jquery.min.js'),
  this.lazyLoadService.loadScript('../assets/js/vendor/modernizr-2.8.3.min.js')
  }
  detailProduct(){
    this.proId = this.rout.snapshot.paramMap.get("proId");
    this.service.getProductById(this.proId).subscribe((result:any)=>{
      this.prod=result;
    })
  }

}
