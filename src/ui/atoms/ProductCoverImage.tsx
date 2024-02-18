import React from "react";
import { type CoverImage } from "@/types/productListItemTypes";

interface Props {
	coverImage: CoverImage;
}

const ProductCoverImage = ({ coverImage: { src, alt } }: Props) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50">
			<img
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};

export default ProductCoverImage;
