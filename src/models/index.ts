import { Sequelize } from "sequelize";
import { User, UserFactory } from "./user";
import { TaskFactory, AssociateUserTasks } from "./tasks";
import { AssociateHouseholdUsers, HouseholdFactory } from "./household";
import { DiscussionFactory, AssociateUserDiscussion } from "./discussion";
import { RewardFactory } from "./reward";

const dbName = "hometasticDb";
const username = "root";
const password = "password";

const sequelize = new Sequelize(dbName, username, password, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

TaskFactory(sequelize);
UserFactory(sequelize);
HouseholdFactory(sequelize);
DiscussionFactory(sequelize);
RewardFactory(sequelize);
AssociateUserTasks();
AssociateUserDiscussion();
AssociateHouseholdUsers();


export const db = sequelize;
