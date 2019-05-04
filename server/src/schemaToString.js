const fs = require('fs');
const path = require('path');

const typeDefs = fs
	.readFileSync(
		process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")
	).toString('utf-8');

console.log(typeDefs);

module.exports = typeDefs;
