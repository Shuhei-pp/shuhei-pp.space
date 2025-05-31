export const getTextColor = () => {
	const dark = window.matchMedia("(prefers-color-scheme: dark)");
	return dark.matches ? "#dddddd" : "#333333";
};
