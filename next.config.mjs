/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		// serverActions: true, // available by default now
	},
};

const withMDX = require("@next/mdx")();
export default withMDX(nextConfig);
