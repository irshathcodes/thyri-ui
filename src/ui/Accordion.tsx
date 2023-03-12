import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import cn from "clsx";

interface AccordionProps {
	title: string;
	info: string;
	show?: boolean;
}

interface AccordionListProps {
	data: AccordionProps[];
}

export default function AccordionList({ data }: AccordionListProps) {
	return (
		<ul className="p-4 md:max-w-4xl mx-auto mt-12 space-y-6">
			{data.map((item, i) => (
				<Accordion key={i} {...item} />
			))}
		</ul>
	);
}

function Accordion({ title, info, show }: AccordionProps) {
	const [showInfo, setShowInfo] = useState(show === true);

	return (
		<li className="border border-gray-200 rounded-md shadow-md">
			<button
				className="flex justify-between p-4 w-full bg-gray-200 rounded-t-md"
				onClick={() => setShowInfo(!showInfo)}
			>
				<h2 className="text-slate-800 font-semibold text-lg">{title}</h2>
				{showInfo ? (
					<MinusIcon className="w-6 h-6" />
				) : (
					<PlusIcon className="w-6 h-6" />
				)}
			</button>
			{showInfo && <p className={cn("text-slate-600 p-4")}>{info}</p>}
		</li>
	);
}
