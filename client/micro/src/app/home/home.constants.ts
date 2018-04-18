import { ProjectInterface } from "../interfaces";

export interface HomeDataInterface {
    products?: HomeProductsInterface[],
    projects?: ProjectInterface[],
    partners?: Object[],
}

export interface HomeProductsInterface {
    id: string;
    categoryId: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface HomePartnersInterface {

}

export const HomeDataMock: HomeDataInterface = {
    products: [
        {
            id: '1', 
            categoryId: '1', 
            name: 'Sandwich Panel', 
            description: 'Some Description goes here because this is a product',
            imageUrl: './assets/sandwich-panel.png',
        },
        {
            id: '2',
            categoryId: '2',
            name: 'Thermal Isolation',
            description: `Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
                Some Description goes here because this is a product
            `,
            imageUrl: './assets/sandwich-panel.png',
        },
        {
            id: '3',
            categoryId: '3',
            name: 'Alluminium',
            description: 'Some Description goes here because this is a product',
            imageUrl: 'https://images.ua.prom.st/655705941_w0_h0_penoplast.png',
        },
    ],
    partners: [],
    projects: [
        {
            id: '1',
            name: 'Jermuk Group Factory',
            name_hy: 'string',
            name_ru: '',
            description: 'Factory in Jermuk',
            description_hy: 'string',
            description_ru: 'string',
            imageUrls: [],
            mainImageUrl: 'http://www.abc.net.au/news/image/4754534-3x2-940x627.jpg',
            appearsOnHomePage: true
        },
        {
            id: '1',
            name: 'Jermuk Group Factory',
            name_hy: 'string',
            name_ru: '',
            description: 'Factory in Jermuk',
            description_hy: 'string',
            description_ru: 'string',
            imageUrls: [],
            mainImageUrl: 'https://i2.wp.com/www.info-360.com/wp-content/uploads/2017/04/10-marla-house-250-sq-yds-house-modern-house-design-architecture-urban-factory-4.jpg?fit=960%2C540',
            appearsOnHomePage: true
        },
        {
            id: '1',
            name: 'Jermuk Group Factory',
            name_hy: 'string',
            name_ru: '',
            description: 'Factory in Jermuk',
            description_hy: 'string',
            description_ru: 'string',
            imageUrls: [],
            mainImageUrl: 'http://www.moneyfactoryinvesting.com/wp-content/uploads/2016/07/LillieCawthorn-WebsiteBanner4-optimized.jpg',
            appearsOnHomePage: true
        },
    ],
}