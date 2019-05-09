import ClassNames from 'classnames';

/* Class assignment runner for different styled sections of the component. */
export const prepareComponent = (context, state, props, styles) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	const expandedClass = (state.expanded) ? styles.takeTwoSpots : null;
	const expandedBodyClass = (state.expanded) ? styles.expanded : null;
	const expansionDirClass = parseExpansionDirection(props.expansionDir, styles);
	const shapeClass = (props.shape) ? styles.rounded : null;
	
	const twoSizeCardClasses = ClassNames(styles.twoSizeCard, themeClass, shapeClass, expandedClass);
	const headerClasses = ClassNames(styles.header, themeClass, expansionDirClass, shapeClass);
	const bodyClasses = ClassNames(styles.body, themeClass, expansionDirClass, expandedBodyClass);
	const cardTitleClasses = ClassNames(styles.cardTitle, themeClass);
	const linkListContainerClasses = ClassNames(styles.linkListContainer, themeClass);
	const topCardButtonClasses = ClassNames(styles.topCardButtons, themeClass);
	const cardBottomClasses = ClassNames(styles.cardBottom, shapeClass, themeClass);


	return {
		twoSizeCardClasses,
		headerClasses,
		bodyClasses,
		cardTitleClasses,
		linkListContainerClasses,
		topCardButtonClasses,
		cardBottomClasses
	};
};

export const parseExpansionDirection = (expansionDir, styles) => {
	switch(expansionDir) {
		case 'horizontal': return styles.horizontal;
		case 'vertical': return styles.vertical;
		default: return styles.horizontal;
	}
};

/* Prepare data that social media icon gallery needs to render links. */
export const prepareLinkGallery = (props, SocialMediaIconComponents) => {

		// - Grab network names to match agains available icon sets.
		const iconKeys = props.socialMediaLinks.map((linkItem) => linkItem.network);
		//console.log(iconKeys);
		
		// - Put together a payload that lets the card render out the icons 
		//   with their approriate links.
		const cardSocialLinks = iconKeys.map((key, index) => {
		
			return {
				icons: SocialMediaIconComponents[key],
				link: props.socialMediaLinks[index].link
			};
		});

		return cardSocialLinks;
};
