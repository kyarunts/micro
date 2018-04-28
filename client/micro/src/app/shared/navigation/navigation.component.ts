import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ProductsComponentService } from '../../products/products.component.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    
    public mobileNavOpen: boolean = false;
    public navigationItems: {name: string, routerLink: string}[] = [
        { name: 'HOME PAGE', routerLink: '/home' },
        { name: 'ABOUT US', routerLink: '/about' },
        { name: 'PRODUCTS', routerLink: '/products' },
        { name: 'CALCULATOR', routerLink: '/calculator' },
        { name: 'PORTFOLIO', routerLink: '/portfolio' },
        { name: 'PARTNERS', routerLink: '/partners' },
        { name: 'INSTALLATION', routerLink: '/installation' },
        { name: 'CONTACTS', routerLink: '/contacts' },
    ];
    public productsSubmenuItems: {}[];

    public currentLanguage: number = 0;
    public languages: string[] = ['hy', 'ru', 'eng'];
    public isSubmenuHidden: boolean;

    constructor(
        private router: Router,
        private httpService: ProductsComponentService
    ) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
                this.mobileNavOpen = false;
                document.body.classList.remove('navOpened');
                if (val.url.indexOf('products') > -1) {
                    this.isSubmenuHidden = true;
                }
                else {
                    this.isSubmenuHidden = false;
                }
            }
        })
    }
    
    ngOnInit() {
        this.httpService.getCategories().subscribe(data => {
            this.productsSubmenuItems = data;
        })
    }

    public changeLanguage(index: number): void {
        this.currentLanguage = index;
    }

    public navMobileClickHandler() {
        document.body.scrollIntoView();
        this.mobileNavOpen = !this.mobileNavOpen;
        if (this.mobileNavOpen) {
            document.body.classList.add('navOpened')
        } else {
            document.body.classList.remove('navOpened')
        }
    }
}
