const mongoose = require('mongoose')



// 1- Create Schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category Name Required'],
        unique: [true, 'Category Name Must Be Unique'],
        minLength: [3, 'category name is too short'],
        maxLength: [30, 'category name is too long']
    },
    slug: { // A and B  ==> emous.com/a-and-be
        type: String,
        lowercase: true,
    },
    image: String,
}, {timestamps: true})
// 2- Create Model from the above schema
const categoryModel = new mongoose.model('Category', categorySchema) // this model i'll use it to make current operations

module.exports = categoryModel; // exports the model to can use it in other page by calling it