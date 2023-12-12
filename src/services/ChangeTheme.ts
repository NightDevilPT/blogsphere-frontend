import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

export const changeTheme = (theme: string) => {
	document.querySelector("html")?.setAttribute("data-theme", theme);
};
