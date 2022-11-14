"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseholdFactory = exports.Household = void 0;
const sequelize_1 = require("sequelize");
class Household extends sequelize_1.Model {
}
exports.Household = Household;
function HouseholdFactory(sequelize) {
    Household.init({
        householdId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        tableName: "household",
        sequelize,
    });
}
exports.HouseholdFactory = HouseholdFactory;
// export function AssociateHouseholdUsers() {
//   Household.hasMany(User, { foreignKey: "userId" });
//   User.belongsTo(Household, { foreignKey: "userId" });
// }
