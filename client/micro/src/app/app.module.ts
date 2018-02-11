import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InstallationComponent } from './installation/installation.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';
import { MicroHttpService } from './micro-http.service';
import { ProductsComponentService } from 'app/products/products.component.service';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './shared/footer/footer.component';
import { IconsComponent } from './generics/icons/icons.component';
import { CounterDirective } from './generics/counter.directive';
import { RecentProjectsComponent } from './home/recent-projects/recent-projects.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { HomeClientsComponent } from './home/home-clients/home-clients.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartnersComponent,
    PortfolioComponent,
    ProductsComponent,
    AboutComponent,
    ContactsComponent,
    InstallationComponent,
    CalculatorComponent,
    NavigationComponent,
    AdminComponent,
    FooterComponent,
    IconsComponent,
    CounterDirective,
    RecentProjectsComponent,
    HomeProductsComponent,
    HomeClientsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    MicroHttpService,
    ProductsComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }