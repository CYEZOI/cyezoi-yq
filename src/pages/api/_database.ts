import { DataTypes, Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "_sqlite.sqlite",
})

export const financeModule = sequelize.define(
    "finance",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        money: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        detail: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
)

sequelize.sync();