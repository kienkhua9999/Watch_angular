import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../home/ProductService.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  listpro;
  constructor( private service:ProductServiceService) { }
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
