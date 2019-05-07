/* Prepare data that social media icon gallery needs to render links. */
export const prepareLinkGallery = (props, SocialMediaIconComponents) => {
		// - Grab keys of socialURL object in order to figure out which 
		//   social media links are provided with an artist's profile.
		const URLKeys = Object.keys(props.socialURLs);		
		// - Map over each of those keys and match it to an object that holds 
		// 	 the icons for that link type. End up with an object holding objects
		// 	 that hold icons. 
		const artistSocialLinks = URLKeys.map((key) => {
		
		// const iconTitle = `${key}Icons`;

		// return {
		// 	link: props.socialURLs[key],
		// 	[iconTitle]: SocialMediaIconComponents[key]	
		// };
			return {
				icons: SocialMediaIconComponents[key],
				link: props.socialURLs[key]
			};
		});

		return artistSocialLinks;
};
