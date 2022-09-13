const mongoose = require('mongoose');

// expenses is database name
mongoose.connect('mongodb://localhost:27017/expenses');


module.exports = mongoose;