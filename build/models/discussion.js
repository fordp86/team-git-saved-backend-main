"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociateUserDiscussion = exports.DiscussionFactory = exports.Discussion = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
class Discussion extends sequelize_1.Model {
}
exports.Discussion = Discussion;
function DiscussionFactory(sequelize) {
    Discussion.init({
        discussionId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        headline: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        content: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
        tableName: "discussion",
        sequelize,
    });
}
exports.DiscussionFactory = DiscussionFactory;
function AssociateUserDiscussion() {
    user_1.User.hasMany(Discussion, { foreignKey: "userId" });
    Discussion.belongsTo(user_1.User, { foreignKey: "userId" });
}
exports.AssociateUserDiscussion = AssociateUserDiscussion;
