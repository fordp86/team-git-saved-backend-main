"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const user_1 = require("./user");
const tasks_1 = require("./tasks");
const household_1 = require("./household");
const discussion_1 = require("./discussion");
const reward_1 = require("./reward");
let dbname = process.env.DB_NAME ?? "hometasticDb";
let user = process.env.DB_USER ?? "root";
let password = process.env.DB_PW ?? "123";
let host = process.env.DB_HOST ?? "localhost";
// Connect to JawsDB through Sequelize.
const sequelize = new sequelize_1.Sequelize(dbname, user, password, {
    host: host,
    dialect: "mysql",
    port: 3306,
});
(0, tasks_1.TaskFactory)(sequelize);
(0, user_1.UserFactory)(sequelize);
(0, household_1.HouseholdFactory)(sequelize);
(0, discussion_1.DiscussionFactory)(sequelize);
(0, reward_1.RewardFactory)(sequelize);
(0, tasks_1.AssociateUserTasks)();
(0, discussion_1.AssociateUserDiscussion)();
// AssociateHouseholdUsers();
exports.db = sequelize;
