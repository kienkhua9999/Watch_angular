import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,Ng2SearchPipeModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
