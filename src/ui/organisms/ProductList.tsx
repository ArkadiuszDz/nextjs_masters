import { type Product } from "@/types/productTypes";
import ProductListItem from "@/ui/molecules/ProductListItem";

interface Props {
	products: Product[];
}

const ProductList = ({ products = [] }: Props) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => {
				return (
					<ProductListItem
						key={product.productDescription.name}
						product={{
							id: product.id,
							coverImage: {
								src: product.coverImage.src,
								alt: product.coverImage.alt,
							},
							productDescription: {
								category: product.productDescription.category,
								price: product.productDescription.price,
								name: product.productDescription.name,
								description: product.productDescription.description,
							},
						}}
					/>
				);
			})}
		</ul>
	);
};

export default ProductList;
