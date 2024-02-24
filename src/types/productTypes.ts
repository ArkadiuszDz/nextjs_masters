export interface CoverImage {
	src: string;
	alt: string;
}

export interface ProductDescription {
	category: string;
	name: string;
	price: number;
	description: string;
}

export interface Product {
	id: string;
	coverImage: CoverImage;
	productDescription: ProductDescription;
}
