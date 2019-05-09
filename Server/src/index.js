const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const logger= require('morgan');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const createServer = require('./createServer');
const db = require('./databaseConnection');

dotenv.config();

const app = express();
const server = createServer();
const port = process.env.GRAPHQL_LISTEN_PORT || 4000;

// console.log('Got past createServer()');
// console.log(server);

app.options('*', cors())

// - Logging
app.use(logger('dev'));

// - Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// - Cookie Parser
app.use(cookieParser());

// - Static files
app.use(express.static(path.join(__dirname, 'public')));

// - Allow all CORS requests for now, lock this down eventually.
//app.use(cors({credentials: true, origin: process.env.FRONTEND_URL}));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// - TODO -> Include userIDs and user details on each request.

// - Grab userID if a user is signed into the application.
// app.use((req, res, next) => {
// 	const { token } = req.cookies;

// 	if (token) {
// 		const { userID } = jwt.verify(token, process.env.APP_SECRET);
// 	}

// 	next();
// });

// - If a user is logged in, populate their details into an object that 
//   is pushed into the request object.
app.use((req, res, next) => {
	if (!req.userID) return next();
	// const user = << somehow query neo4J database here >>
	// req.user = user;
	next();
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () => console.log(`GraphQL server listening at http://localhost:${port}/graphql`));

