// Database Schema 

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    title : String,
    desc: String,
    amount:String,
    date: String
},{
    timestamps:true
});


module.exports = mongoose.model('expensesData',userSchema);