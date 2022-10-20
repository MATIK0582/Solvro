import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'

dotenv.config();

const config = new Sequelize('postgres', 'postgres', process.env.DATABASE_PASSPORT, {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
})

export default config