const product = require('./product');

const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    photo: { type: String }
})

module.exports = productSchema;