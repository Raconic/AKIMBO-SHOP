const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true},
    description: { type: String, required: true, default: 0 },
    image: { type: String }
}, {
    timestamps: true
})

module.exports = productSchema;