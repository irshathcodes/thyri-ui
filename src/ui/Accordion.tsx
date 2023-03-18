import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import cn from 'clsx';

interface AccordionProps {
	title: string;
	info: string;
	show?: boolean;
}

interface AccordionListProps {
	data: AccordionProps[];
}

export default function AccordionList({ data }: AccordionListProps) {
	const [items, setItems] = useState(data);

	const showAccordion = (title: string) => {
		setItems(items.map((item) => ({ ...item, show: item.title === title })));
	};

	return (
		<ul className="p-4 md:max-w-4xl mx-auto mt-12 space-y-6">
			{items.map((item, i) => (
				<Accordion key={i} {...item} showAccordion={showAccordion} />
			))}
		</ul>
	);
}

interface AccordionComponentProps extends AccordionProps {
	showAccordion: (title: string) => void;
}

function Accordion({
	title,
	info,
	show,
	showAccordion,
}: AccordionComponentProps) {
	return (
		<li className="border border-gray-200 rounded-md shadow-md">
			<button
				className="flex justify-between p-4 w-full bg-gray-200 rounded-t-md text-slate-800 hover:text-slate-600"
				onClick={() => showAccordion(title)}
			>
				<h2 className="font-semibold text-lg">{title}</h2>
				{show ? (
					<MinusIcon className="w-6 h-6" />
				) : (
					<PlusIcon className="w-6 h-6" />
				)}
			</button>
			<p
				className={cn(
					'text-slate-600 transition-all duration-300 h-0 translate-y-0 px-4 overflow-hidden',
					{
						'h-auto py-4 translate-y-100': show,
					}
				)}
			>
				{info}
			</p>
		</li>
	);
}
