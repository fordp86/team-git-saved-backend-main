import { Sequelize } from "sequelize";
import { UserFactory } from "./user";
import { TaskFactory, AssociateUserTasks } from "./tasks";
import { HouseholdFactory } from "./household";
import { DiscussionFactory, AssociateUserDiscussion } from "./discussion";
import { RewardFactory } from "./reward";

let dbname: string = process.env.DB_NAME ?? "hometasticDb";
let user: string = process.env.DB_USER ?? "root";
let password: string = process.env.DB_PW ?? "123";
let host: string = process.env.DB_HOST ?? "localhost";

// Connect to JawsDB through Sequelize.
const sequelize = new Sequelize(dbname, user, password, {
  host: host,
  dialect: "mysql",
  port: 3306,
});

TaskFactory(sequelize);
UserFactory(sequelize);
HouseholdFactory(sequelize);
DiscussionFactory(sequelize);
RewardFactory(sequelize);
AssociateUserTasks();
AssociateUserDiscussion();
// AssociateHouseholdUsers();

export const db = sequelize;
