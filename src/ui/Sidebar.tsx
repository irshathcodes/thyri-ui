import cn from 'clsx';
import Logo from '../../public/sidebar-assets/Logo';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
	items: SidebarItem[];
	open: boolean;
}

export interface SidebarItem {
	label: string;
	icon: JSX.Element;
	link: string;
	selected?: boolean;
}

export default function Sidebar(props: SidebarProps) {
	return (
		<div
			className={cn('shadow-md transition-all duration-300 h-screen', {
				'-translate-x-full overflow-hidden opacity-0 w-0': !props.open,
				'translate-x-0 overflow-auto opacity-100 w-80 border border-transparent border-r-gray-300':
					props.open,
			})}
		>
			<SideHeader />

			<nav className="p-4">
				<ul className="space-y-2">
					{props.items.map((item) => {
						return <SidebarItem key={item.label} {...item} />;
					})}
				</ul>
			</nav>
		</div>
	);
}

function SidebarItem(props: SidebarItem) {
	return (
		<li className={cn('p-3 rounded-xl', props.selected && 'bg-sky-500')}>
			<a className="flex items-center gap-3" href={props.link}>
				<span
					className={cn('text-gray-400', props.selected && 'text-gray-100')}
				>
					{props.icon}
				</span>
				<span
					className={cn(
						'capitalize text-gray-600 font-semibold tracking-wide',
						props.selected && 'text-gray-100'
					)}
				>
					{props.label}
				</span>
			</a>
		</li>
	);
}

function SideHeader() {
	return (
		<div className="p-4">
			<div className="flex items-center gap-2">
				<Logo className="w-8 h-8" />
				<h1 className="text-xl font-bold tracking-wide">MingCute</h1>
			</div>
			<div className="flex items-center bg-gray-100 p-2 py-3 my-6 rounded-lg">
				<MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
				<input
					type="text"
					placeholder="Search"
					className="bg-gray-100 px-2 w-full focus:outline-none"
				/>
			</div>
		</div>
	);
}
