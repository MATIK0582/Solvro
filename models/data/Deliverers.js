import { Sequelize } from "sequelize";
import database from '../../config/database.js'

const Deliverers = database.define("Deliverers", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.TEXT,
    price: Sequelize.FLOAT,
});

export default Deliverers;