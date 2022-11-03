import { Sequelize } from 'sequelize';
import database from '../../config/database.js'

const Deliveries = database.define("Deliveries", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    userId: Sequelize.STRING,
    delivererId: Sequelize.INTEGER,
},
{
    freezeTableName: true,
});

export default Deliveries;