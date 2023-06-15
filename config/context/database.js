import Sequelize from 'sequelize';

const database = new Sequelize({
  host: 'localhost',
  port: 3306,
  username: 'Francisco',
  password: '21091998Leonel',
  database: 'cv',
  dialect: 'mysql',
});

export { database };
