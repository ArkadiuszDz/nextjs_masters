import { getProductsList } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SuggestedProductsList = async () => {
	const products = await getProductsList();
	await wait(5000);
	return <ProductList products={products.slice(-4)} />;
};

export default SuggestedProductsList;
