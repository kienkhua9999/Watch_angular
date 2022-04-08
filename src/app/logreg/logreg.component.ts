import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './AccountService.service';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.scss']
})
export class LogregComponent implements OnInit {
  listAcc;
  constructor( private service:AccountServiceService) { }

  ngOnInit() {
    this.getAllPro();
  }
  getAllPro(){
    this.service.getALLAccount().subscribe(result=>{
      
      console.log(result);
      this.listAcc=result;
    })
  }
}
