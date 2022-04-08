import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './logreg/login/login.component';
import { LogregComponent } from './logreg/logreg.component';
import { RegComponent } from './logreg/register/reg.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckOutComponent } from './shop/check-out/check-out.component';
import { ShopCartComponent } from './shop/shop-cart/shop-cart.component';
import { ShopComponent } from './shop/shop.component';
import { WishListComponent } from './shop/wish-list/wish-list.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'about', component:AboutUsComponent},
  {path:'shop' ,component:ShopComponent},
  {path:'productdetail/:proId' ,component:ProductDetailComponent},
  {path:'shop-cart' ,component:ShopCartComponent},
  {path:'check-out' ,component:CheckOutComponent},
  {path:'wishlist' ,component:WishListComponent},
  {path:'register' ,component:RegComponent},
  {path:'login' ,component:LoginComponent},
  {path:'blog' ,component:BlogComponent},
  {path: 'logres', component:LogregComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
