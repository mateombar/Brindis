const mongoose = require('mongoose');
const Schema =  mongoose.Schema; //How the data will look

const companySchema = new Schema({
    title: String,
    description: String,
    restaurant: String,
    entertainment: String,
    bar: String,
    coffee: String

});
module.exports = mongoose.model('business',companySchema);//for each set of tasks, tasks will be stored in the collection