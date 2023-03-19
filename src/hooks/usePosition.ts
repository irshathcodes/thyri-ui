import { MutableRefObject, useLayoutEffect, useState } from 'react';

export default function usePosition(ref: MutableRefObject<HTMLElement | null>) {
	const [position, setPosition] = useState<'left' | 'right'>('left');
	useLayoutEffect(() => {
		if (ref.current) {
			const canFitLeftSide =
				ref.current.getBoundingClientRect().left > window.innerWidth / 2;
			setPosition(canFitLeftSide ? 'left' : 'right');
		}
	}, [ref.current]);

	return position;
}
