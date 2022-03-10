const Product = require("../../models/product")

module.exports= {
    index,
    create,
    show
}

async function index(req, res) {
    const products = await Product.find({}).sort('name')
    res.json(products);
}


async function create(req, res) {
    console.log("hello")
    const product = await Product.create(req.body);
    res.json(product)
}

async function show(req, res) {
    const product = await Product.findById(req.params.id);
    res.json(product);
  }
