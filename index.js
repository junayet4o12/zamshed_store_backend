const express = require('express');
const app = express();
const connectDB = require('./src/DB/connectDB');
const port = process.env.PORT || 3000;
require('dotenv').config()
const applyMiddleWare = require('./src/middlewares/applyMiddlewares');
applyMiddleWare(app)
const allProducts = require('./src/routes/allProducts/index');
const addProducts = require('./src/routes/addProducts/index')
const jwt = require('./src/routes/jwt/index')
const updateProducts = require('./src/routes/updateProducts/index')
const singleProduct = require('./src/routes/singleProduct/index')
const deleteProducts = require('./src/routes/deleteProducts/index')
const categoryWiseProducts = require('./src/routes/categoryWiseProductsCount/index')
const cartProducts = require('./src/routes/getCartProducts/index')
const addUsers = require('./src/routes/addUsers/index')
const allUsers = require('./src/routes/allUsers/index')
const singleUser = require('./src/routes/singleUser/index')
const updateSingleUsers = require('./src/routes/updateSingleUser/index')
const admin = require('./src/routes/isAdmin/index')
const storeOrderedProduct = require('./src/routes/storeOrderedProduct/index')
const getOrderedProduct = require('./src/routes/getOrderedProduct/index')
const getOrderedProductByEmail = require('./src/routes/getOrdererProductByEmail/index')


app.use(jwt)
app.use(allProducts)
app.use(addProducts)
app.use(updateProducts)
app.use(singleProduct)
app.use(deleteProducts)
app.use(categoryWiseProducts)
app.use(cartProducts)
app.use(addUsers)
app.use(allUsers)
app.use(singleUser)
app.use(updateSingleUsers)
app.use(admin)
app.use(storeOrderedProduct)
app.use(getOrderedProduct)
app.use(getOrderedProductByEmail)

app.all("*", (req, res, next) => {
    const error = new Error(`The requested Url is invalid : [${req?.url}]`)
    error.status = 404;
    next(error)
})
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})
const main = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
main()