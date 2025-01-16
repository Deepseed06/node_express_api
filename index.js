const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const usersRoutes =require('./routes/users.js')
app.use(bodyParser.json())
app.use('/users/', usersRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`)
})