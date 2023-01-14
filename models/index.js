var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(`mongodb+srv://james:${process.env.MPASS}@cluster0.iss9lr6.mongodb.net/?retryWrites=true&w=majority`)


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");