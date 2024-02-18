import ProductListItem from "@/ui/molecules/ProductListItem";

const ProductList = () => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<ProductListItem
				product={{
					coverImage: {
						src: "./bluza.jpg",
						alt: "Bluza",
					},
					productDescription: {
						category: "ubrania",
						price: 12.45,
						name: "Bluza",
					},
				}}
			/>
			<ProductListItem
				product={{
					coverImage: {
						src: "./koszulka.jpg",
						alt: "Koszulka",
					},
					productDescription: {
						category: "ubrania",
						price: 10,
						name: "Koszulka",
					},
				}}
			/>
			<ProductListItem
				product={{
					coverImage: {
						src: "./kubek.jpg",
						alt: "Kubek",
					},
					productDescription: {
						category: "dom",
						price: 8.55,
						name: "Kubek",
					},
				}}
			/>
			<ProductListItem
				product={{
					coverImage: {
						src: "./torba.jpg",
						alt: "Torba",
					},
					productDescription: {
						category: "akcesoria",
						price: 13,
						name: "Torba",
					},
				}}
			/>
		</ul>
	);
};

export default ProductList;
