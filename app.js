import express from 'express'
import * as dotenv from 'dotenv'

import connectToDatabase from './config/connectToDatabase.js'
import routes from './routes/index.js'

dotenv.config()

connectToDatabase()

const app = express()
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})