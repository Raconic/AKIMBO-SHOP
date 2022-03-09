const product = require("../../models/product")

module.exports= {
    index,
    show,
    create,
    deleteProduct
}

async function index(res, req) {
    const products = await product.find({}).sort('name')
    res.json(products);
}

async function show(res, req) {
    const product = await product.findById(req.params.id);
    res.json(product)
}

async function create(res, req) {
    const product = await product.create(req.body)
    res.json(product)
}

async function deleteProduct (req, res) {
    const product = await Pedal.findByIdAndDelete(req.body.id)
    res.json(product)
}
