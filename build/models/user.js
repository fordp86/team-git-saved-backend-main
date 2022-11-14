"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function UserFactory(sequelize) {
    User.init({
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        roleId: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        householdName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        bio: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        points: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true,
        },
        task: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        profileImg: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        tableName: "users",
        sequelize,
    });
}
exports.UserFactory = UserFactory;
// export function AssociateUsersToHousehold() {
//   User.hasOne(Household, { foreignKey: "userId" });
//   Household.belongsTo(User, { foreignKey: "userId" });
// }
