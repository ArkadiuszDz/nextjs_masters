import { type ProductDescription } from "@/types/productListItemTypes";

interface Props {
	productDescription: ProductDescription;
}

const ProductListItemDescription = ({ productDescription: { name, category, price } }: Props) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span> {price}
			</p>
		</div>
	);
};

export default ProductListItemDescription;
