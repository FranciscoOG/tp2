import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const cvModel = database.define(
  'cv',
  /*isto é o nome da tabela da base de dados*/ {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    nome: {
      type: STRING,
      allowNull: true,
    },
    idade: {
      type: INTEGER,
      allowNull: false,
    },
    
    experiencia: {
      type: STRING,
      allowNull: false,
    },
    
    escolaridade: {
      type: INTEGER,
      allowNull: false,
    },
    
    curso: {
      type: STRING,
      allowNull: false,
    },
  }
);
export { cvModel };
