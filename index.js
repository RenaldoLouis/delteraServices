const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ErrorHandler = require("./src/middlewares/ErrorHandlerMiddleware.js")
var cors = require('cors')
const port = 3000
const route = require('./src/routes/UserRoute.js')

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/delteraDemo', route)

app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})