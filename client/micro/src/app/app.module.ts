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
    IconsComponent
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
