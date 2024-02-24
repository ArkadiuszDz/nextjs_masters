import Link from "next/link";
import { type Product } from "@/types/productTypes";
import ProductCoverImage from "@/ui/atoms/ProductCoverImage";
import ProductListItemDescription from "@/ui/atoms/ProductListItemDescription";

interface Props {
	product: Product;
}

const ProductListItem = ({
	product: {
		id,
		coverImage,
		productDescription: { category, name, price, description },
	},
}: Props) => {
	return (
		<li>
			<Link href={`/product/${id}`}>
				<article>
					<ProductCoverImage coverImage={coverImage} />
					<ProductListItemDescription
						productDescription={{
							category,
							name,
							price,
							description,
						}}
					/>
				</article>
			</Link>
		</li>
	);
};

export default ProductListItem;
