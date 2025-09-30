import { useContext } from "react";
import { ThemeContext } from "../theme.context.js";

export function useTheme() {
	return useContext(ThemeContext)
}

// https://www.youtube.com/watch?v=UC2vnwCY4T4
//41:43