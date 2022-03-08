const product = require('./product');

const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    name: { type: string, required: true },
    price: { type: Number, required: true, default: 0 },
    image: String
})

module.exports = productSchema;