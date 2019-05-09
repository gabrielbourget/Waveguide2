/* Prepare data that social media icon gallery needs to render links. */
export const prepareLinkGallery = (props, SocialMediaIconComponents) => {

		// - Grab network names to match agains available icon sets.
		const iconKeys = props.socialMediaLinks.map((linkItem) => linkItem.network);
		
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
