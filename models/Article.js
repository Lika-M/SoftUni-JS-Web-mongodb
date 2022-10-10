const { Schema, model } = require('mongoose');

//create Schema
const articleSchema = new Schema({
    author: String,
    title: { type: String, require: true, minLength: 5 },
    content: { type: String, require: true, minLength: 10 }
});

//create model
const Article = model('Article', articleSchema);

module.exports = Article;