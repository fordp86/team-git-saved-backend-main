"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateUserTasks = exports.TaskFactory = exports.Tasks = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
class Tasks extends sequelize_1.Model {
}
exports.Tasks = Tasks;
function TaskFactory(sequelize) {
    Tasks.init({
        taskId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        pointValue: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        assignedTo: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        completed: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        tableName: "tasks",
        sequelize,
    });
}
exports.TaskFactory = TaskFactory;
function AssociateUserTasks() {
    user_1.User.hasMany(Tasks, { foreignKey: "userId" });
    Tasks.belongsTo(user_1.User, { foreignKey: "userId" });
}
exports.AssociateUserTasks = AssociateUserTasks;
