import sequelize from "@/utils/db";
import { DataTypes, Model } from "sequelize";
import User from "./user.model";
import Blog from "./blog.model";

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    blogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "comments",
    underscored: true,
  }
);

Comment.belongsTo(User, {
  foreignKey: "authorId",
  as: "author",
  onDelete: "cascade",
  onUpdate: "no action",
});
Comment.belongsTo(Blog, { foreignKey: "blogId", onDelete: "cascade", onUpdate: "no action" });

export default Comment;
