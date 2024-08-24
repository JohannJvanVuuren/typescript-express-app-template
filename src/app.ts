import express from 'express';
import path from 'node:path';

// Import routes
import homeRoute from './routes/home';

// Instantiation of the express application
const app: express.Application  = express();

// Serving of static files such as style.css
app.use(express.static(path.join(__dirname, 'public')));

// Setup of the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Registration of middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registration of routes
app.use('/', homeRoute);

export default app;