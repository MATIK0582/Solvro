import { Sequelize } from 'sequelize';
import database from '../config/database.js'

const DiscountCodes = database.define("DiscountCodes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.TEXT,
    value: Sequelize.INTEGER,
    type: Sequelize.ENUM('amount', 'percentage')
});

export default DiscountCodes;