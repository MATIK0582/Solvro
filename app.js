import express from 'express'

import routes from './routes/index.js'
import sessionConfig from './config/session.js'
import createTables from './config/tables.js'
import connectToDatabase from './src/database/connectToDatabase.js'

connectToDatabase()
createTables()

const app = express()
app.use(sessionConfig)
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})