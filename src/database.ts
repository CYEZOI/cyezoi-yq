import { DataTypes, Sequelize } from "sequelize"

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db/yq.sqlite",
})

export const financeModule = sequelize.define(
    "finance",
    {
        financeId: {
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
);

export const studentModule = sequelize.define(
    "student",
    {
        studentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        studentName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
);

export const groupModule = sequelize.define(
    "group",
    {
        groupId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        groupName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);

export const groupMemberModule = sequelize.define(
    "groupMember",
    {
        group: {
            type: DataTypes.INTEGER,
        },
        student: {
            type: DataTypes.INTEGER,
        },
        leader: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
);

export const roleModule = sequelize.define(
    "role",
    {
        roleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);

export const roleMemberModule = sequelize.define(
    "roleMember",
    {
        role: {
            type: DataTypes.INTEGER,
        },
        student: {
            type: DataTypes.INTEGER,
        },
    },
);

export const privilegeRecordModule = sequelize.define(
    "privilegeRecord",
    {
        privilegeRecordId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        student: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        io: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
);

export const userModule = sequelize.define(
    "user",
    {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
);

sequelize.sync();