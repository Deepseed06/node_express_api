const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const usersRoutes =require('./routes/users.js')
const saleProducts = require('./routes/saleProducts.js')
const products = require('./routes/products.js')
const categories = require('./routes/categories.js')
const cart = require('./routes/cart.js')
const notifications = require('./routes/notifications.js')
app.use(bodyParser.json())
app.use('/users/', usersRoutes)
app.use('/saleProducts/', saleProducts)
app.use('/products/', products)
app.use('/products/', categories)
app.use('/cart/', cart)
app.use('/notifications/', notifications)
app.get('/', (req, res) => {
  res.json(200).send({data:"why"})
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})