export const capitalize = (string) => {
	const first = string.charAt(0).toUpperCase();
	const rest = string.slice(1).toLowerCase();
	return first + rest;
};
