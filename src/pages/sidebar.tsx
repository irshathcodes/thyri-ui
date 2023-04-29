import Sidebar, { SidebarItem } from '@/ui/Sidebar';
import {
	HomeIcon,
	MusicalNoteIcon,
	InboxIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const ITEMS: SidebarItem[] = [
	{
		icon: <HomeIcon className="w-6 h-6" />,
		label: 'Home',
		link: 'https://irshathcodes.com',
		selected: true,
	},
	{
		icon: <MusicalNoteIcon className="w-6 h-6" />,
		label: 'orders',
		link: 'https://irshathcodes.com',
	},
	{
		icon: <InboxIcon className="w-6 h-6" />,
		label: 'inbox',
		link: 'https://irshathcodes.com',
	},
];

export default function index() {
	const [show, setShow] = useState(false);

	return (
		<div className="grid grid-cols-[auto_1fr]">
			<Sidebar open={show} items={ITEMS} />
			<div className="flex flex-col justify-center items-center">
				<button
					onClick={() => setShow(!show)}
					className="border w-fit ml-8 border-gray-300 active:scale-90 duration-300 transition-transform px-4 py-2 text-gray-700 font-medium tracking-wide rounded-md"
				>
					{show ? 'Hide Sidebar' : 'Show Sidebar'}
				</button>
			</div>
		</div>
	);
}
