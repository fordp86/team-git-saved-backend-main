import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  Sequelize,
} from "sequelize";
import { User } from "./user";

export class Discussion extends Model<
  InferAttributes<Discussion>,
  InferCreationAttributes<Discussion>
> {
  declare discussionId: number;
  declare headline: string;
  declare content: string;
  declare userId: number;
}

export function DiscussionFactory(sequelize: Sequelize) {
  Discussion.init(
    {
      discussionId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      headline: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },

    {
      freezeTableName: true,
      tableName: "discussion",
      sequelize,
    }
  );
}

export function AssociateUserDiscussion() {
  User.hasMany(Discussion, { foreignKey: "userId" });
  Discussion.belongsTo(User, { foreignKey: "userId" });
}
