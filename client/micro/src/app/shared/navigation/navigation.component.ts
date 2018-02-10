import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    
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
    public productsSubmenuItems: {}[] = [
        { id: '0', name: 'Sandwich Panels', src: './assets/wall.svg', routerLink: '/products' },
        { id: '1', name: 'Profiles', src: './assets/pro.svg', routerLink: '/products' },
        { id: '2', name: 'Thermal Isolation', src: './assets/thermal.svg', routerLink: '/products' },
        { id: '3', name: 'Assembling Parts', src: './assets/assembling.svg', routerLink: '/products' },
        { id: '4', name: 'Metal Constructions', src: './assets/metal.svg', routerLink: '/products' },
        { id: '5', name: 'Aluminium Sheets & Rods', src: './assets/aluminum.svg', routerLink: '/products' },

    ]
    public currentLanguage: number = 0;
    public languages: string[] = ['hy', 'ru', 'eng'];
    public isSubmenuHidden: boolean;

    constructor(private router: Router) {
        router.events.subscribe((val) => {
            if (val instanceof NavigationEnd) {
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
    }

    public changeLanguage(index: number): void {
        this.currentLanguage = index;
    }
}
