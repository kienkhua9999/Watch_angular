import { Component, OnInit } from '@angular/core';

import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { Account } from '../Account';
import { AccountServiceService } from '../AccountService.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
    acc;

    constructor(private service : AccountServiceService) { }

    ngOnInit() {
        
        this.acc= new Account();
        this.onSubmit();
    }

    // convenience getter for easy access to form fields
 

    onSubmit() {
        
        this.service.insertAccount(this.acc).subscribe(result=>{  
            Swal.fire({
                
                icon: 'success',
                title: 'Đăng kí thành công'
              
                
              })
        });
       
        this.acc= new Account();
      
    
    }
    

}
