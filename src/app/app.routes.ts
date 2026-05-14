import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutPreviewComponent } from './components/about-preview/about-preview.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPreviewComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contactUs', component: ContactUsComponent} // TODO: new component for contact form.
];
