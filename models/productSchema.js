const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true},
    description: { type: String, required: true },
    image: { type: String }
}, {
    timestamps: true
})

module.exports = productSchema;