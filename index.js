const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const mongoose = require('mongoose');
const articleController = require('./controllers/articleController.js');

const homeController = require('./controllers/homeController.js');

const connStr = 'mongodb://localhost:27017/test-db';

const Article = require('./models/Article.js');

start();

async function start() {

    const app = express();
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({extended: true}));

    app.use(homeController);
    app.use('/articles', articleController);

    await mongoose.connect(connStr, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database is ready');

    // await Article.create({

    //     author: 'Peter Johnson',
    //     title: 'SecondTitle',
    //     content: 'Some content - second'

    // });

    // await Article.create({
    //     author: 'John Smith',
    //     title: 'First Title',
    //     content: 'Some content'
    // });

    // await mongoose.disconnect();

    app.listen(3000, () => console.log('Server is listening on port 3000...'));
}


