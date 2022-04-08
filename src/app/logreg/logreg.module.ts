import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogregComponent } from './logreg.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [LogregComponent]
})
export class LogregModule { }
