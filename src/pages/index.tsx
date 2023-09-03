import Link from 'next/link';

const links = ['accordion', 'dropdown', 'skeleton', 'sidebar'];

export default function Home() {
	return (
		<div className="md:max-w-3xl mx-auto">
			<ul className="gap-4 grid md:grid-cols-3 mt-12 w-full place-content-center">
				{links.map((link) => {
					return (
						<li key={link}>
							<div>
								<Link
									className="shadow-xl border border-gray-200 w-48 py-8 rounded-xl capitalize font-semibold text-slate-700 text-center block"
									href={`/${link}`}
								>
									{link}
								</Link>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
