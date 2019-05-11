const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const { makeAugmentedSchema, augmentSchema } = require('neo4j-graphql-js');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
// const { typeDefs } = require('schemaToString');
const gql = require('graphql-tag');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const driver = require('./databaseConnection');

dotenv.config();

// - Convert graphQL schema down to a single template string.
const typeDefs = fs
	.readFileSync(
		process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")
	).toString('utf-8');

const createServer = () => {

	const augmentedSchema = makeAugmentedSchema({
		typeDefs,
		resolvers: {
			Mutation,
			Query
		}
	});

	// console.log(augmentedSchema);

	return new ApolloServer({ 
		schema: augmentedSchema,
		context: req => ({ ...req, driver }),
		introspection: true,
		playground: true 
	});

};

module.exports = createServer;
