const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');
const neo4jgraphql = require('neo4j-graphql-js');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');

const Mutations = {
	/***************/
	/* - SIGN UP - */
	/***************/	
	async CreateUser(parent, args, ctx, info) {
		const userInfo = args;
		// - Lower case email address for storage in DB
		userInfo.email = userInfo.email.toLowerCase();
		// - Hash password
		userInfo.password = await bcrypt.hash(userInfo.password, 12);
		// - Generate UUID
		userInfo.id = uuid();

		// - TODO -> Figure out how this translates to actual Neo4J DateTime types.
		// - CreatedAt Timestamp
		userInfo.createdAt = DateTime.now();

		// - Create user
		const user = neo4jgraphql(parent, userInfo, ctx, info);
		
		// - Create JWT
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
		
		// - Set token into a browser cookie.
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24
		});

		return user;
	},
	/***************/
	/* - SIGN IN - */
	/***************/
	async login(parent, args, ctx, info) {

		const { email, password } = args; 

		// - Check if there is a user with that email.
		email = email.toLowerCase();

		// - TODO -> Somehow call generated User query here, finding user by email 
		//           Either find a way to call generated query or make cypher query here. 
		// const user = somehow call User Query here. 
		const user = {}; // - Empty object for now so linter doesn't complain.

		if (!user) throw new Error(`No user found for email address: ${ email }`);
		
		// - Check if their password is correct 
		const valid = await bcrypt.compare(password, user.password);
		if (!valid) throw new Error('Invalid password...');

		// - Generate JWT
		const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

		// - Set token into a browser cookie.
		ctx.response.cookie('token', token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24
		});

		return user;
	},

	/****************/
	/* - SIGN OUT * -/
	/****************/
	signOut(parent, args, ctx, info) {
		ctx.response.clearCookie('token');
		return { message: 'Signout complete.'};
	},

	/******************************/
	/* - REQUEST PASSWORD RESET - */
	/******************************/
	async requestReset(parent, args, ctx, info) {

		const { email } = args;

		// - Check if a real user
		// - TODO -> Somehow call generated User query here, finding user by email 
		//           Either find a way to call generated query or make cypher query here. 
		// const user = somehow call User Query here. 
		const user = {}; // - Empty object for now so linter doesn't complain.
		
		if (!user) throw new Error(`No user found for email address: ${ email }`);

		// - Set reset token and expiry for the token.
		const resetToken = (await promisify(randomBytes)(20)).toString('hex');
		const resetTokenExpiry = Date.now() + 3600000; // - 1 hour token.
		// - TODO -> Somehow call generated UpdateUser query here, finding user by email 
		//           Either find a way to call generated query or make cypher query here. 
		// const user = somehow call User Query here. 
		const updatedUser = {}; // - Empty object for now so linter doesn't complain.

		// - Send email to user containing reset token and link to password reset screen.
		// - Use MJML for formatting, https://mjml.io/documentation/
		// - Use something like Postmark in production, MailTrap in dev.

		return { message: 'Reset token created and sent off' };
	}
};













