import { Sequelize } from 'sequelize';
import database from '../../config/database.js'

const Baskets = database.define("Baskets", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    userId: Sequelize.STRING,
    productId: Sequelize.INTEGER,
    productQuantity: Sequelize.INTEGER
});

export default Baskets;