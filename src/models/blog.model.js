import sequelize from "@/utils/db";
import { DataTypes, Model } from "sequelize";
import User from "@/models/user.model";
import slugify from "slugify";

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    slug: {
      type: DataTypes.TEXT,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  },
  {
    sequelize,
    modelName: "blogs",
    underscored: true,
  }
);

Blog.beforeCreate(blog => {
  blog.slug = slugify(blog.title, {
    lower: true,
  });
});

Blog.beforeCreate(blog => {
  if (blog.tags) {
    blog.tags = blog.tags.split(" ").filter(Boolean);
  }
});

Blog.belongsTo(User, { foreignKey: "authorId" });

export default Blog;
