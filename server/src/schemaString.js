const gql = require('graphql-tag');

const typeDefs = gql`
	# - Eventually have a permission for Friendship between users. 

	enum Permission {
		ADMIN
		USER
	}

	type User {
		id: ID!
		name: String
		firstName: String
		middleNames: [String]
		lastName: String 
		email: String!
		password: String!
		image: String
		biography: String
		city: City
		createdAt: DateTime
		updatedAt: DateTime 	
		permissions: [Permission!]!
		artProjects: [ArtProject] @relation(name: "ALIAS_OF", direction: "IN")
		musicLabels: [MusicLabel] @relation(name: "OWNER_OF", direction: "OUT")
		artCollectives: [ArtCollective] @relation(name: "MEMBER_OF", direction: "OUT")
		socialMediaGroups: [SocialMediaGroup] @relation(name: "MEMBER_OF", direction: "OUT")
		socialMediaLinks: [SocialMediaLink] @relation(name: "HAS_LINK_TO", direction: "OUT")
	}

	type Friends_With @relation(name: "FRIENDS_WITH") {
		from: User 
		to: User 
		createdAt: DateTime
	}

	# - TOFIGUREOUT -> How to handle the fact that follows relationship might be 
	# 						 		 be between multiple types of types other than just user 
	#								   to user (e.g. user to artproject or user to artcollective)
	#									 Either way, no friendship or follows for a while, that's complicated. 
	type Follows @relation(name: "FOLLOWS") {
		from: User
		to: User
		createdAt: DateTime
	}

	type ArtProject {
		id: ID!
		image: String
		name: String
		biography: String
		socialMediaLinks: [SocialMediaLink] @relation(name: "HAS_LINK_TO", direction: "OUT")
		songs: [Song] @relation(name: "CREATOR_OF", direction: "OUT")
		creator: User @relation(name: "ALIAS_OF", direction: "OUT")
	}

	type Song {
		id: ID!
		title: String
		image: String
		duration: Int
		keySignature: String
		tempo: Int
		releaseDate: DateTime
	}

	type SocialMediaLink {
		id: ID!
		network: String
		link: String!
	}

	type MusicLabel {
		id: ID!
		name: String
		image: String
		biography: String
		owners: [User] @relation(name: "OWNER_OF", direction: "IN")
		socialMediaLinks: [SocialMediaLink] @relation(name: "HAS_LINK_TO", direction: "OUT")
	}

	type ArtCollective {
		id: ID!
		name: String
		image: String 
		biography: String
		members: [User] @relation(name: "MEMBER_OF", direction: "IN")
		socialMediaLinks: [SocialMediaLink] @relation(name: "HAS_LINK_TO", direction: "OUT")
	}

	type SocialMediaGroup {
		id: ID!
		name: String 
		image: String
		biography: String
		socialNetwork: String
		members: [User] @relation(name: "MEMBER_OF", direction: "IN")
	}

	type Festival {
		id: ID!
		name: String
		image: String 
		description: String 
		address: Address!
		socialMediaLinks: [SocialMediaLink] @relation(name: "HAS_LINK_TO", direction: "OUT")
	}

	type Venue {
		id: ID!
		name: String 
		image: String 
		description: String 
		# Find a way to handle addresses in a reasonable, future-tolerant way
		address: Address! 
		socialMediaLinks: [SocialMediaLink] @relation(name: "HAS_LINK_TO", direction: "OUT")
	}

	type Event {
		venue: Venue
		festival: Festival
		title: String!
		description: String
		date: DateTime
	}

	type Address {
		id: ID!
		latitude: Float!
		longitude: Float! 
		unitNumber: Int
		streetNumber: Int
		streetName: String
		postalCode: String
		zipCode: String
		city: City
		county: County 
		province: Province
		state: State 
		country: Country
	}

	type County {
		id: ID!
		name: String 
	}

	type City {
		id: ID!
		latitude: Float!
		longitude: Float!
		name: String
	}

	type Province {
		id: ID!
		name: String 
	}

	type State {
		id: ID!
		name: String 
	}

	type Country {
		id: ID!
		name: String 
	}

	#############################
	# - QUERIES AND MUTATIONS - #
	#############################

	type Query {

	}

	type Mutation {

	}

`;

module.exports = typeDefs;
