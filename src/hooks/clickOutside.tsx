import { useEffect } from "react";

export const useOutsideClick = (
	ref: React.MutableRefObject<HTMLDivElement | null>,
	callback: any
) => {
	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref, callback]);
};