export default async function BlogPage({ params }: { params: { date: string; slug: string } }) {
	const { date, slug } = params;

	return (
		<div>
			<h1>
				Blog {date} / {slug}
			</h1>
		</div>
	);
}
