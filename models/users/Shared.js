import { Sequelize } from 'sequelize';
import database from '../../config/database.js'

const Shared = database.define("Shared", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    basketObject: Sequelize.JSONB,
    link: Sequelize.STRING
},
{
    freezeTableName: true,
});

export default Shared;