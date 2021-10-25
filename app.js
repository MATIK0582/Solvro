import express from 'express'
import { application } from 'express'
import database from './Config/database.js'
// import createDB from './Models/index.js'
import {hello} from './Models/index.js'

// const { application } =     require('express');
// const DataBase =            require('./Config/DB.js')
// const createDB =            require('./Models/index.js')

const App = express();

database.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Error:' + err))

hello()

// createDB();

// App.get('/', (req, res) => res.send("Działa"))
// App.use('/start', require('./Routes/index.js'))

const PORT = process.env.PORT || 5000;
App.listen(PORT, console.log(`Server is listening on ${PORT}`));