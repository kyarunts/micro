import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

    public partners: Object[] = [
        { name: 'Jermuk', logo: 'http://www.jermukgroup.am/img/home_logo_en.png', url: 'http://www.jermukgroup.am' },
        { name: 'Pepsi Armenia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/2000px-Pepsi_logo_2014.svg.png', url: 'https://pepsi.com' },
        { name: 'Artfood', logo: 'http://www.artfood.am/images/LogoArtfood.png', url: 'http://www.artfood.am' },
        { name: 'TaTever', logo: 'https://www.tatever.am/img/Tatever_logo_en.png', url: 'https://www.tatever.am/' },
        { name: 'Gyumri Beer', logo: 'http://armaveni.am/images/c/2017/2370.jpg', url: 'http://gyumribeer.am' },
        { name: 'Tamara Fruit', logo: 'http://www.tamara-fruit.com/img/logo.png', url: 'http://www.tamara-fruit.com/' },
        { name: 'Vallex Group', logo: 'http://en.a1plus.am/wp-content/uploads/sites/2/2012/04/d4ad26a1e13645646316481e4901c55d-472x265.jpg', url: 'http://www.tamara-fruit.com/' },
        { name: 'CJSCo SCR', logo: 'https://pbs.twimg.com/profile_images/1211816531/_____________jpeg.jpg', url: 'http://www.tamara-fruit.com/' },
        { name: 'Mikshin', logo: 'https://static.wixstatic.com/media/1c35f5_825a8c7b2e9d4f98a8985b5e1fd02466~mv2_d_4648_2753_s_4_2.png/v1/fill/w_120,h_71,al_c,usm_0.66_1.00_0.01/1c35f5_825a8c7b2e9d4f98a8985b5e1fd02466~mv2_d_4648_2753_s_4_2.png', url: 'http://www.tamara-fruit.com/' },
        
    ]

    constructor() { }

    ngOnInit() {
        window.document.body.scrollIntoView(true);
    }

}
