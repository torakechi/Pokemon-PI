const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID, // Un identificador único universal (UUID)
      defaultValue: DataTypes.UUIDV4, // Si desea generar un valor UUID basado únicamente en números aleatorios, puede usar la uuid_generate_v4
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    sprite: {
      type: DataTypes.STRING,
      
      },

    hp: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    attack: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    defense: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    specialAttack: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    specialDefense: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },
    
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    height: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    weight: {
      type: DataTypes.INTEGER,
      defaultValue: '50'
    },

    type1: {
      type: DataTypes.STRING
    },
    type2: {
      type: DataTypes.STRING
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

  },
  { 
    timestamps: false, 
    freezeTableName: true,
  }
  );
};
