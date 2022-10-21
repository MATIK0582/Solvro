import { Sequelize } from "sequelize";
import database from '../config/database.js'

const sessions = database.define("Session", {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    userId: Sequelize.STRING,
    expires: Sequelize.DATE,
    data: Sequelize.TEXT,
});

export default sessions;