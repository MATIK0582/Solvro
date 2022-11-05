import { Sequelize } from 'sequelize';
import database from '../config/database.js'

const Products = database.define("Products", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.TEXT,
    price: Sequelize.FLOAT,
});

export default Products;