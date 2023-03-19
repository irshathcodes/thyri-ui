import { MutableRefObject, useEffect } from 'react';

export default function useOutsideClick(
	ref: MutableRefObject<HTMLElement | null>,
	cb: () => void
) {
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
				cb();
			}
		};
		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});
}
