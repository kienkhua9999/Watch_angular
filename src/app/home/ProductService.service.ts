import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

constructor(private proService : HttpClient) { }
  getALLProduct(){
    return this.proService.get("http://localhost:8088/productService/getListProduct")
  }

  getProductById(proId){
    return this.proService.get("http://localhost:8088/productService/getProductById/"+proId)
  }
}

