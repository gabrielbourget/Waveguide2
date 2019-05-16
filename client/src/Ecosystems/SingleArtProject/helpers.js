/* Prepare data that social media icon gallery needs to render links. */
export const prepareLinkGallery = (ArtProject, SocialMediaIconComponents) => {

		// - Grab network names to match agains available icon sets.
		const iconKeys = ArtProject[0].socialMediaLinks.map((linkItem) => linkItem.network);
		//console.log(iconKeys);
		
		// - Put together a payload that lets the card render out the icons 
		//   with their approriate links.
		const cardSocialLinks = iconKeys.map((key, index) => {
		
			return {
				icons: SocialMediaIconComponents[key],
				link: ArtProject[0].socialMediaLinks[index].link
			};
		});

		return cardSocialLinks;
};
