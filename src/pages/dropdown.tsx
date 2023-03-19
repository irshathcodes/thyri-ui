import Dropdown, { DropdownOptions } from '@/ui/Dropdown';
import { useRef, useState } from 'react';

const options: DropdownOptions[] = [
	{
		id: 'html',
		label: 'HTML',
	},
	{
		id: 'css',
		label: 'CSS',
	},
	{
		id: 'javascript',
		label: 'JavaScript',
	},
];

export default function Index() {
	const [show, setShow] = useState(false);
	const buttonRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="relative w-fit mt-20 mx-auto" ref={buttonRef}>
			<button
				onClick={() => setShow(!show)}
				className="bg-blue-400 text-white px-4 py-2 rounded-md"
			>
				Show Dropdown
			</button>
			<Dropdown
				options={options}
				handlerRef={buttonRef}
				show={show}
				setShow={setShow}
				onChange={(id) => console.log(id)}
			/>
		</div>
	);
}
