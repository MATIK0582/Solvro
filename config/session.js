import session from 'express-session'
import sequelizeStore from 'connect-session-sequelize'

import database from './database.js'

const myStore = new sequelizeStore(session.Store)

const sessionConfig = session({
    secret: process.env.DATABASE_SECRET,
    store: new myStore({
      db: database,
    }),
    resave: false,
    saveUninitialized: true,
    cookie:{
      maxAge: Number(process.env.ONE_DAY_IN_MILISECONDS),
    }
})

export default sessionConfig