import { Sequelize } from 'sequelize';
import database from '../config/database.js'

const Sessions = database.define("Session", {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    expires: Sequelize.DATE,
    data: Sequelize.TEXT,
});

export default Sessions;