const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');

db.connect();

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.use(express.urlencoded());
app.use(express.json());

app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
