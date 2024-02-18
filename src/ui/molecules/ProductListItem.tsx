import { type Product } from "@/types/productListItemTypes";
import ProductCoverImage from "@/ui/atoms/ProductCoverImage";
import ProductListItemDescription from "@/ui/atoms/ProductListItemDescription";

interface Props {
	product: Product;
}

const ProductListItem = ({
	product: {
		coverImage,
		productDescription: { category, name, price },
	},
}: Props) => {
	return (
		<li>
			<article>
				<ProductCoverImage coverImage={coverImage} />
				<ProductListItemDescription
					productDescription={{
						category,
						name,
						price,
					}}
				/>
			</article>
		</li>
	);
};

export default ProductListItem;
