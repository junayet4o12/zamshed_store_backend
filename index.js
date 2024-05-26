const express = require('express');
const app = express();
const connectDB = require('./src/DB/connectDB');
const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
const allProducts = require('./src/routes/allProducts/index');
const Products = require('./src/modals/products/products');
const port = process.env.PORT || 3000;
require('dotenv').config()

applyMiddleWare(app)
app.use(allProducts)
const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
main()