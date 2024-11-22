import { DataTypes, Model } from 'sequelize';
import sequelizeInstance from '../startup/db.js';

class Person extends Model {}

Person.init({
    id: {
        type: DataTypes.UUID,           // Define o tipo UUID para o ID
        defaultValue: DataTypes.UUIDV4, // Gera um UUID v4 por padrão
        primaryKey: true                // Define como chave primária
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    salary:{
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize: sequelizeInstance,      // Passa a instância do Sequelize
    modelName: 'Person',      // Nome do modelo
    tableName: 'tb_person', // Nome da tabela no banco de dados
    timestamps: true, 
    paranoid: true 
});

export default Person;