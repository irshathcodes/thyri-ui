import useOutsideClick from '@/hooks/useOutsideClick';
import usePosition from '@/hooks/usePosition';
import clsx from 'clsx';
import React, { MutableRefObject } from 'react';

type Position = 'left' | 'right';

interface DropdownProps {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	options: DropdownOptions[];
	onChange?: (id: string) => void;
	handlerRef: MutableRefObject<HTMLElement | null>;
	placement?: Position;
}

export interface DropdownOptions {
	label: string;
	id: string;
	OptionComponent?: (label: string, id: string) => JSX.Element;
}

export default function Dropdown({
	handlerRef,
	show,
	setShow,
	options,
	onChange,
	placement,
}: DropdownProps) {
	useOutsideClick(handlerRef, () => setShow(false));
	const position = placement || usePosition(handlerRef);

	return (
		<div
			className={clsx(
				'absolute mt-2 top-full shadow-md w-fit rounded-xl border border-slate-300 transition-all duration-300',
				position === 'left' ? 'left-0' : 'right-0',
				{
					'translate-y-0 pointer-events-auto opacity-100': show,
					'-translate-y-4 opacity-0 pointer-events-none': !show,
				}
			)}
		>
			<ul className="w-fit divide-y-2">
				{options.map(({ id, label, OptionComponent }) => {
					return (
						<li key={id}>
							<button
								onClick={() => {
									onChange?.(id);
									setShow(false);
								}}
								className={clsx('px-4 py-2 w-full', {
									'hover:bg-gray-200 focus:ring-1': !OptionComponent,
								})}
							>
								{OptionComponent ? (
									OptionComponent(label, id)
								) : (
									<DefaultOption label={label} />
								)}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function DefaultOption(props: { label: string }) {
	return <div className="text-slate-800 text-left">{props.label}</div>;
}
