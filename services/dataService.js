const Article = require('../models/Article.js');

async function getAll() {
    const data = Article.find().lean();
    return data;
}

async function createItem(data) {

    console.log({...data});
    await Article.create({...data});
}
module.exports = {
    getAll,
    createItem
}