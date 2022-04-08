import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

constructor(private Accservice : HttpClient) {}
getALLAccount(){
  return this.Accservice.get("http://localhost:8088/AccountService/getListAccount")
}

getAccountById(usreId){
  return this.Accservice.get("http://localhost:8088/AccountService/getAccountById/"+usreId)
}
insertAccount(acc){
  return this.Accservice.post("http://localhost:8088/AccountService/insertCategory",acc)
}

}
