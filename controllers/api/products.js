const product = require("../../models/product")

module.exports= {
    index,
    create,
    show
}

async function index(res, req) {
    const products = await product.find({}).sort('name')
    res.json(products);
}


async function create(res, req) {
    const product = await product.create(req.body)
    res.json(product)
}

async function show(req, res) {
    const product = await product.findById(req.params.id);
    res.json(product);
  }
