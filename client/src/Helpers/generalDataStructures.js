// - Build an enum so that I can scale functionality as the application
// 	 offers more sorting options. 
export const sortCriteriaEnum = Object.freeze({
	'ALPHABETICAL':1,
	'REVERSE_ALPHABETICAL':2
});

// - Build an enum to hold themes and map names for them to simple 
//   numbers. This will enforce consistency, and allow me to build in
//   new themes. 
export const themeEnum = Object.freeze({
	'DARK': 1,
	'LIGHT': 2
})


