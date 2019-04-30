// import React from 'react';

// - Import all social media icon SVGs as functional React Components.

// - Facebook 
import { ReactComponent as FacebookIconDarkTheme } from '../Icons/SocialMediaIcons/Facebook/FacebookIconDarkTheme.svg';
import { ReactComponent as FacebookIconLightTheme } from '../Icons/SocialMediaIcons/Facebook/FacebookIconLightTheme.svg';
import { ReactComponent as FacebookIconHighlighted } from '../Icons/SocialMediaIcons/Facebook/FacebookIconHighlighted.svg';
// - Instagram
import { ReactComponent as InstagramIconDarkTheme } from '../Icons/SocialMediaIcons/Instagram/InstagramIconDarkTheme.svg';
import { ReactComponent as InstagramIconLightTheme } from '../Icons/SocialMediaIcons/Instagram/InstagramIconLightTheme.svg';
import { ReactComponent as InstagramIconHighlighted } from '../Icons/SocialMediaIcons/Instagram/InstagramIconHighlighted.svg';
// - Twitter
import { ReactComponent as TwitterIconDarkTheme } from '../Icons/SocialMediaIcons/Twitter/TwitterIconDarkTheme.svg';
import { ReactComponent as TwitterIconLightTheme } from '../Icons/SocialMediaIcons/Twitter/TwitterIconLightTheme.svg';
import { ReactComponent as TwitterIconHighlighted } from '../Icons/SocialMediaIcons/Twitter/TwitterIconHighlighted.svg';
// - Spotify
import { ReactComponent as SpotifyIconDarkTheme } from '../Icons/SocialMediaIcons/Spotify/SpotifyIconDarkTheme.svg';
import { ReactComponent as SpotifyIconLightTheme } from '../Icons/SocialMediaIcons/Spotify/SpotifyIconLightTheme.svg';
import { ReactComponent as SpotifyIconHighlighted } from '../Icons/SocialMediaIcons/Spotify/SpotifyIconHighlighted.svg';
// - Bandcamp
import { ReactComponent as BandcampIconDarkTheme } from '../Icons/SocialMediaIcons/Bandcamp/BandcampIconDarkTheme.svg';
import { ReactComponent as BandcampIconLightTheme } from '../Icons/SocialMediaIcons/Bandcamp/BandcampIconLightTheme.svg';
import { ReactComponent as BandcampIconHighlighted } from '../Icons/SocialMediaIcons/Bandcamp/BandcampIconHighlighted.svg';
// - Soundcloud
import { ReactComponent as SoundcloudIconDarkTheme } from '../Icons/SocialMediaIcons/Soundcloud/SoundcloudIconDarkTheme.svg';
import { ReactComponent as SoundcloudIconLightTheme } from '../Icons/SocialMediaIcons/Soundcloud/SoundcloudIconLightTheme.svg';
import { ReactComponent as SoundcloudIconHighlighted } from '../Icons/SocialMediaIcons/Soundcloud/SoundcloudIconHighlighted.svg';
// - vk
import { ReactComponent as VKIconDarkTheme } from '../Icons/SocialMediaIcons/VK/VKIconDarkTheme.svg';
import { ReactComponent as VKIconLightTheme } from '../Icons/SocialMediaIcons/VK/VKIconLightTheme.svg';
import { ReactComponent as VKIconHighlighted } from '../Icons/SocialMediaIcons/VK/VKIconHighlighted.svg';
// - Youtube
import { ReactComponent as YoutubeIconDarkTheme } from '../Icons/SocialMediaIcons/Youtube/YoutubeIconDarkTheme.svg';
import { ReactComponent as YoutubeIconLightTheme } from '../Icons/SocialMediaIcons/Youtube/YoutubeIconLightTheme.svg';
import { ReactComponent as YoutubeIconHighlighted } from '../Icons/SocialMediaIcons/Youtube/YoutubeIconHighlighted.svg';
// - Snapchat
import { ReactComponent as SnapchatIconDarkTheme } from '../Icons/SocialMediaIcons/Snapchat/SnapchatIconDarkTheme.svg';
import { ReactComponent as SnapchatIconLightTheme } from '../Icons/SocialMediaIcons/Snapchat/SnapchatIconLightTheme.svg';
import { ReactComponent as SnapchatIconHighlighted } from '../Icons/SocialMediaIcons/Snapchat/SnapchatIconHighlighted.svg'; 
// - Apple Music
import { ReactComponent as AppleMusicIconDarkTheme } from '../Icons/SocialMediaIcons/Apple/AppleMusicIconDarkTheme.svg';
import { ReactComponent as AppleMusicIconLightTheme } from '../Icons/SocialMediaIcons/Apple/AppleMusicIconLightTheme.svg';
import { ReactComponent as AppleMusicIconHighlighted } from '../Icons/SocialMediaIcons/Apple/AppleMusicIconHighlighted.svg';
// - Personal website
import { ReactComponent as PersonalWebsiteIconDarkTheme } from '../Icons/SocialMediaIcons/PersonalWebsite/PersonalWebsiteIconDarkTheme.svg';
import { ReactComponent as PersonalWebsiteIconLightTheme } from '../Icons/SocialMediaIcons/PersonalWebsite/PersonalWebsiteIconLightTheme.svg';
import { ReactComponent as PersonalWebsiteIconHighlighted } from '../Icons/SocialMediaIcons/PersonalWebsite/PersonalWebsiteIconHighlighted.svg';

// - Stick them all into an object.
const socialMediaIcons = {
	facebook: {
		darkTheme: FacebookIconDarkTheme,
		lightTheme: FacebookIconLightTheme,
		highlighted: FacebookIconHighlighted
	},
	instagram: {
		darkTheme: InstagramIconDarkTheme,
		lightTheme: InstagramIconLightTheme,
		highlighted: InstagramIconHighlighted
	},
	twitter: {
		darkTheme: TwitterIconDarkTheme,
		lightTheme: TwitterIconLightTheme,
		highlighted: TwitterIconHighlighted
	},
	spotify: {
		darkTheme: SpotifyIconDarkTheme,
		lightTheme: SpotifyIconLightTheme,
		highlighted: SpotifyIconHighlighted
	},
	bandcamp: {
		darkTheme: BandcampIconDarkTheme,
		lightTheme: BandcampIconLightTheme,
		highlighted: BandcampIconHighlighted
	},
	soundCloud: {
		darkTheme: SoundcloudIconDarkTheme,
		lightTheme:  SoundcloudIconLightTheme,
		highlighted: SoundcloudIconHighlighted
	},
	vk: {
		darkTheme: VKIconDarkTheme,
		lightTheme: VKIconLightTheme,
		highlighted: VKIconHighlighted
	},
	youtube: {
		darkTheme: YoutubeIconDarkTheme,
		lightTheme: YoutubeIconLightTheme,
		highlighted: YoutubeIconHighlighted
	},
	snapchat: {
		darkTheme: SnapchatIconDarkTheme,
		lightTheme: SnapchatIconLightTheme,
		highlighted: SnapchatIconHighlighted
	},
	apple: {
		darkTheme: AppleMusicIconDarkTheme,
		lightTheme: AppleMusicIconLightTheme,
		highlighted: AppleMusicIconHighlighted
	},
	personalWebsite: {
		darkTheme: PersonalWebsiteIconDarkTheme,
		lightTheme: PersonalWebsiteIconLightTheme,
		highlighted: PersonalWebsiteIconHighlighted
	}
};

// - Export an object that contains them all.

export default socialMediaIcons;

// - From there, import that object into component files that need to 
//   display some selection of those icons as buttons to access 
//   different peoples' profiles.
