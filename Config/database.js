import Sequelize from 'sequelize'

export default new Sequelize('Solvro', 'postgres', 'toorek', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
      timestamps: true
  }
});