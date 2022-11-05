import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'

dotenv.config();

const config = new Sequelize('Solvro', 'postgres', process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
})

export default config