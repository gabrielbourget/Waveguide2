const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const logger= require('morgan');
const express = require('express');
const dotenv = require('dotenv');

const createServer = require('./createServer');
const db = require('./databaseConnection');

dotenv.config();

const app = express();
const server = createServer();

// console.log('Got past createServer()');
// console.log(server);

// - Logging
app.use(logger('dev'));

// - Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// - Cookie Parser
app.use(cookieParser());

// - Static files
app.use(express.static(path.join(__dirname, 'public')));

// - TODO -> Include userIDs and user details on each request.

const port = process.env.GRAPHQL_LISTEN_PORT || 4000;

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () => console.log(`Server ready at ${port}`));

// server.start(
// 	{
// 		cors: {
// 			credentials: true,
// 			origin: process.env.FRONTEND_URL
// 		}
// 	},
// 	(details) => {
// 		console.log(`GraphQL Server is now running on port http://localhost:${details.port}`);
// 	}
// );
