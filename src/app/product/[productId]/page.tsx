import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import ProductCoverImage from "@/ui/atoms/ProductCoverImage";
import ProductListItemDescription from "@/ui/atoms/ProductListItemDescription";
import SuggestedProductsList from "@/ui/organisms/SuggestedProductsList";

export const generateStaticParams = async () => {
	const products = await getProductsList();

	return products.map((product) => {
		return { productId: product.id };
	});
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.productDescription.name} - Sklep internetowy`,
		description: product.productDescription.name,
		openGraph: {
			title: `${product.productDescription.name} - Sklep internetowy`,
			description: product.productDescription.name,
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage coverImage={product.coverImage} />
				<ProductListItemDescription productDescription={product.productDescription} />
			</article>
			<aside>
				<Suspense>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
