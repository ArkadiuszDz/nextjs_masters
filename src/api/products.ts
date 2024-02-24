interface ProductResponseItem {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
}

const productResponseItemToProductItemType = (product: ProductResponseItem) => {
	return {
		id: product.id,
		productDescription: {
			name: product.title,
			category: product.category,
			price: product.price,
			description: product.description,
		},
		coverImage: {
			alt: product.title,
			src: product.image,
		},
	};
};

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItemType);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(product);
};
