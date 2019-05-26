const Query = {
	/**********/
	/* - ME - */
	/**********/
	me(parent, args, ctx, info) {

		// - Check to see if there's a user ID
		if (!ctx.request.userId) {
			return null;
		}

		// - TODO -> Somehow call generated User query here, finding user by id 
		//           Either find a way to call generated query or make cypher query here. 
		// const user = somehow call User Query here. 
		const user = {}; // - Empty object for now so linter doesn't complain.		
	}
};
