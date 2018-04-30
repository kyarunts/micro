import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InstallationComponent } from './installation/installation.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AdminComponent } from 'app/admin/admin.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    
    {
        path: 'products',
        component: ProductsComponent,
        children: [{
            path: 'details',
            component: ProductDetailsComponent
        }]
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'partners',
        component: PartnersComponent
    },
    {
        path: 'installation',
        component: InstallationComponent
    },
    {
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: 'products/:id', 
        component: ProductsComponent
    },
    {
        path: 'portfolio/:id',
        component: PortfolioComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
