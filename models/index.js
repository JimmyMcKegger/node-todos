var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.set('debug', true);
mongoose.connect(process.env.MONGO)


mongoose.Promise = Promise;

module.exports.Todo = require("./todo");