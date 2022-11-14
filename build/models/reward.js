"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardFactory = exports.Rewards = void 0;
const sequelize_1 = require("sequelize");
class Rewards extends sequelize_1.Model {
}
exports.Rewards = Rewards;
function RewardFactory(sequelize) {
    Rewards.init({
        rewardId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        pointValue: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
        redeemed: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true
        },
        redeemedBy: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        }
    }, {
        freezeTableName: true,
        tableName: "rewards",
        sequelize
    });
}
exports.RewardFactory = RewardFactory;
