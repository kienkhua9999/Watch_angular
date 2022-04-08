import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadScriptService } from './lazy-load-script.service';
import { BlogComponent } from './blog/blog.component';
import {HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { CheckOutComponent } from './shop/check-out/check-out.component';
import { WishListComponent } from './shop/wish-list/wish-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegComponent } from './logreg/register/reg.component';
import { LoginComponent } from './logreg/login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LogregComponent } from './logreg/logreg.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  declarations: [			
      AppComponent,
      HeaderComponent,
      FooterComponent,
      BlogComponent,
      HomeComponent,
      ContactComponent,
      ShopComponent,
      ShopCartComponent,
      CheckOutComponent,
      WishListComponent,
      ProductDetailComponent,
      AboutUsComponent,
      LogregComponent,
      LoginComponent,
      RegComponent
      
   ],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
