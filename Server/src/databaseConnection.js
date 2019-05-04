const neo4j = require('neo4j-driver').v1;
const dotenv = require('dotenv');

dotenv.config();

const db = neo4j.driver(process.env.DATABASE_ENDPOINT,
								neo4j.auth.basic(
									process.env.DATABASE_USERNAME,
									process.env.DATABASE_PASSWORD
								));

module.exports = db;
