import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './pages/_layout/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/_layout/footer/footer.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/about/contact/contact.component';
import { rootRouterConfig } from './app.routes';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
