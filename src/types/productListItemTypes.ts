export interface CoverImage {
	src: string;
	alt: string;
}

export interface ProductDescription {
	category: string;
	name: string;
	price: number;
}

export interface Product {
	coverImage: CoverImage;
	productDescription: ProductDescription;
}
