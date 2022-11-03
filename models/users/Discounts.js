import { Sequelize } from 'sequelize';
import database from '../../config/database.js'

const Discounts = database.define("Discounts", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    userId: Sequelize.STRING,
    discountId: Sequelize.INTEGER,
});

export default Discounts;