const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var cors = require('cors')
const port = 3000
const route = require('./src/routes/route')

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/delteraDemo', route)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})