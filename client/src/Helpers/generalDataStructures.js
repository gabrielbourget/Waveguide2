// ---------------------- //
// - SORT CRITERIA ENUM - //
// ---------------------- //

// - Build an enum so that I can scale functionality as the application
// 	 offers more sorting options. 
export const sortCriteriaEnum = Object.freeze({
	'ALPHABETICAL':1,
	'REVERSE_ALPHABETICAL':2
});

// -------------------- //
// - COLOR THEME ENUM - //
// -------------------- //

// - Build an enum to hold themes and map names for them to simple 
//   numbers. This will enforce consistency, and allow me to build in
//   new themes. 
export const themeEnum = Object.freeze({
	'DARK': 1,
	'LIGHT': 2
})

// ---------------------- //
// - KEY SIGNATURE ENUM - //
// ---------------------- //

// - Enum corresponding to all 48 key signatures, under 
//   Bach's system.
export const keySignatureEnum = Object.freeze({
	'C_MAJ': 1,
	'A_MIN': 2,
	'G_MAJ': 3,
	'E_MIN': 4,
	'D_MAJ': 5,
	'B_MIN': 6,
	'A_MAJ': 7,
	'F_SHARP_MIN': 8,
	'E_MAJ': 9,
	'C_SHARP_MIN': 10,
	'B_MAJ': 11,
	'G_SHARP_MIN': 12,
	'F_SHARP_MAJ': 13,
	'D_SHARP_MIN': 14,
	'C_SHARP_MAJ': 15,
	'A_SHARP_MIN': 16,
	'F_MAJ': 17,
	'D_MIN': 18,
	'B_FLAT_MAJ': 19,
	'G_MIN': 20,
	'E_FLAT_MAJ': 21,
	'C_MIN': 22,
	'A_FLAT_MAJ': 23,
	'F_MIN': 24,
	'D_FLAT_MAJ': 25,
	'B_FLAT_MIN': 26,
	'G_FLAT_MAJ': 27,
	'E_FLAT_MIN': 28,
	'C_FLAT_MAJ': 29,
	'A_FLAT_MIN': 30
});

