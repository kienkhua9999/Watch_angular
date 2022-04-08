import { Component, OnInit } from '@angular/core';

import { Product } from "./Product";
import { ProductServiceService } from './ProductService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listpro;
  constructor(private service:ProductServiceService) { }

  ngOnInit() {
    this.getAllPro();
  }
   getAllPro(){
     this.service.getALLProduct().subscribe(result=>{
       console.log(result)
       this.listpro=result;
     })
   }
}
