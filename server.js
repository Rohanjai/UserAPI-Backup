const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
const cors = require('cors')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

app.use(morgan("tiny"))
connectDB()
app.use(express.json())
app.use(cors())
app.set("view engine", "ejs")
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.use('/', require('./server/routes/router'))

app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})