import { Sequelize } from "sequelize";
import { UserFactory } from "./user";
import { TaskFactory, AssociateUserTasks } from "./tasks";
import { HouseholdFactory } from "./household";
import { DiscussionFactory, AssociateUserDiscussion } from "./discussion";
import { RewardFactory } from "./reward";

const jawsdb: string = process.env.JAWSDB_URL || "";
const dbname: string = process.env.DB_NAME || "";
const dbuser: string = process.env.DB_USER || "";
const dbpassword: string = process.env.DB_PW || "";

let sequelize;

if (jawsdb) {
  sequelize = new Sequelize(jawsdb);
} else {
  sequelize = new Sequelize(dbname, dbuser, dbpassword, {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  });
}

TaskFactory(sequelize);
UserFactory(sequelize);
HouseholdFactory(sequelize);
DiscussionFactory(sequelize);
RewardFactory(sequelize);
AssociateUserTasks();
AssociateUserDiscussion();
// AssociateHouseholdUsers();

export const db = sequelize;
