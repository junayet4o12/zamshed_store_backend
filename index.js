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


app.use(jwt)
app.use(allProducts)
app.use(addProducts)
app.use(updateProducts)
app.use(singleProduct)
app.use(deleteProducts)
app.use(categoryWiseProducts)

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