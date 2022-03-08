require('dotenv').config();
require('./config/database');

const Product = require('./models/product');

(async function() {
    const products = await Product.create([
        {name:'BLUE AKIMBO TRUCKER', price: 25.99, image:''},
        {name:'BROWN AKIMBO TRUCKER', price: 25.99, image:''},
        {name:'GREEN AKIMBO TRUCKER', price: 25.99, image:''},
    ]);


    console.log(products)

  process.exit();

})();