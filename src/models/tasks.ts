import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { User } from "./user";

export class Tasks extends Model<
  InferAttributes<Tasks>,
  InferCreationAttributes<Tasks>
> {
  declare taskId: number;
  declare title: string;
  declare pointValue: number;
  declare userId: number;
  declare completed: boolean;
  declare assignedTo: string;
}

export function TaskFactory(sequelize: Sequelize) {
  Tasks.init(
    {
      taskId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      pointValue: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      assignedTo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      tableName: "tasks",
      sequelize,
    }
  );
}

export function AssociateUserTasks() {
  User.hasMany(Tasks, { foreignKey: "userId" });
  Tasks.belongsTo(User, { foreignKey: "userId" });
}
