"use client";

import { useState } from "react";

const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button className="border border-slate-200 px-4" onClick={() => setCounter(counter - 1)}>
				-
			</button>
			<input readOnly value={counter} className="border border-slate-200" />
			<button className="border border-slate-200 px-4" onClick={() => setCounter(counter + 1)}>
				+
			</button>
		</div>
	);
};

export default ProductCounter;
