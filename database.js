const { Sequelize, DataTypes} =  require("sequelize");

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite"
});

const UsuarioModel = connection.define("Usuarios", {
    nome: {
        type: DataTypes.TEXT
    },
    email: {
        type: DataTypes.TEXT
    },
    senha: {
        type: DataTypes.TEXT
    }
}, {
    underscored: true,
    modelName: "Usuarios",
    freezeTableName: true, 
    timestamps: false,
    defaultScope: false
});

module.exports = UsuarioModel