import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { SectionComponent } from './section/section.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SaleComponent } from './sale/sale.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent },
  {
    path: 'sale',
    component: SaleComponent,
    data: { title: 'Heroes List' }
  },
  { path: 'question', component:QAndAComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product-detail', component: ProductDetailComponent},
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
   
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
