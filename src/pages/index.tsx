import Link from 'next/link';

const links = ['accordion', 'dropdown', 'skeleton'];

export default function Home() {
	return (
		<div>
			<ul className="p-4 md:max-w-3xl gap-4 flex flex-wrap mx-auto mt-12">
				{links.map((link) => {
					return (
						<li key={link}>
							<Link
								className="p-12 inline-block shadow-xl border border-gray-200 rounded-xl capitalize font-semibold text-slate-700"
								href={`/${link}`}
							>
								{link}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
