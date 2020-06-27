import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/about/contact/contact.component';
import { AboutComponent } from './pages/about/about/about.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },
  { path: 'produtos', component: ProductListComponent },
  { path: 'produto/:id', component: ProductListComponent },
];