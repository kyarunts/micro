export interface PartnerInterface {
    id: string;
    name: string;
    name_hy: string;
    name_ru: string;
    websiteUrl: string;
    iconUrl: string;
    appearsOnHomePage: boolean;
    homePageIconUrl: string;
}

export interface ProjectInterface {
    _id: string;
    name: string;
    name_hy: string;
    name_ru: string;
    description: string;
    description_hy: string;
    description_ru: string;
    imageUrls: Object[];
    mainImageUrl: Object;
    appearsOnHomePage: boolean;
}

export interface CategoryInterface {
    id: string;
    name: string;
    name_hy: string;
    name_ru: string;
    description: string;
    description_hy: string;
    description_ru: string;
    iconName: string;
    catalogues: {
        description: string;
        description_hy: string;
        description_ru: string;
        fileUrl: string;
    },
    techSpecs: string;
    techSpecs_hy: string;
    techSpecs_ru: string;
}


export interface ProductInterface {
    id: string;
    categoryId: string;
    name: string;
    name_hy: string;
    name_ru: string;
    description: string;
    description_hy: string;
    description_ru: string;
}