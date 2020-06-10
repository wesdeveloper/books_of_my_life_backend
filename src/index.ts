import * as express from 'express';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

import './modules/database';

import usersRoutes from './modules/users/users-routes';

// Create Express server
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', usersRoutes);

// Declare a route
app.get('/_healthcheck', (req, res) => res.send('It\s ok...'));

export default app;
