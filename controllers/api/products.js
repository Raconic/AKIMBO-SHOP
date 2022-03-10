const product = require("../../models/product")

module.exports= {
    index,
    create,
}

async function index(res, req) {
    const products = await product.find({}).sort('name')
    res.json(products);
}


async function create(res, req) {
    const product = await product.create(req.body)
    res.json(product)
}


