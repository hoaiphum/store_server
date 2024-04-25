const newsRouter = require('./news');
const customerRouter = require('./customer');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/customer', customerRouter);

    app.use('/home', (req, res) => {
        res.render('home');
    });

    app.use('/', (req, res) => {
        res.send('Love Phum');
    });
}

module.exports = route;
