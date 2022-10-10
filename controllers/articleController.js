const { getAll, createItem } = require('../services/dataService.js');
const articleController = require('express').Router();


articleController.get('/', async (req, res) => {
    const articles = await getAll();

    res.render('articles', {
        articles,
        title: 'Articles'
    })
});

articleController.post('/', async (req, res) => {
    const data = await req.body;
    // it needs try-catch
    await createItem(data);

    res.redirect('/articles');
})

module.exports = articleController;