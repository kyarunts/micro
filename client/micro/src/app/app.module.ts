import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import { FooterComponent } from './shared/footer/footer.component';
import { IconsComponent } from './generics/icons/icons.component';
import { CounterDirective } from './generics/counter.directive';
import { RecentProjectsComponent } from './home/recent-projects/recent-projects.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { HomeClientsComponent } from './home/home-clients/home-clients.component';
import { ModalComponent } from './generics/modal/modal.component';
import { ModalService } from './generics/modal/modal.service';
import { ImageViewerComponent } from './generics/image-viewer/image-viewer.component';
import { TextShortenerPipe } from './generics/text-shortener.pipe';
import { LoaderComponent } from './generics/loader/loader.component';
import { ContactsService } from './contacts/contacts.service';
import { PartnersService } from './partners/partners.service';
import { AboutService } from './about/about.service';
import { CalculatorService } from './calculator/calculator.service';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CalculatorStepsComponent } from './calculator/calculator-steps/calculator-steps.component';
import { SharedService } from './shared/shared-service';
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
        ModalComponent,
        ImageViewerComponent,
        TextShortenerPipe,
        LoaderComponent,
        ProductDetailsComponent,
        CalculatorStepsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        MicroHttpService,
        ProductsComponentService,
        ModalService,
        ContactsService, 
        PartnersService,
        AboutService,
        CalculatorService,
        SharedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}