import Blog from "@/models/blog.model";
import Comment from "@/models/comment.model";
import User from "@/models/user.model";
import { Op } from "sequelize";

export const fetchUserBlogs = async (authorId, limit = 10, page = 1, q = "") => {
  try {
    const whereClause =
      q?.length != 0
        ? {
            [Op.or]: [
              { title: { [Op.iLike]: `%${q}%` } },
              { ["$author.username$"]: { [Op.iLike]: `%${q}%` } },
            ],
          }
        : {};

    whereClause.authorId = authorId;

    const response = await Blog.findAll({
      where: whereClause,
      attributes: ["id", "title", "slug", "tags", "createdAt", "authorId", "description"],
      include: [{ model: User, attributes: ["id", "username"], as: "author" }],
      order: [["id", "DESC"]],
      limit: limit,
      offset: (page - 1) * limit,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchBlogs = async (limit = 10, page = 1, q = "") => {
  try {
    const whereClause =
      q?.length != 0
        ? {
            [Op.or]: [
              { title: { [Op.iLike]: `%${q}%` } },
              { ["$author.username$"]: { [Op.iLike]: `%${q}%` } },
            ],
          }
        : {};

    const response = await Blog.findAll({
      where: whereClause,
      attributes: ["id", "title", "slug", "tags", "createdAt", "authorId", "description"],
      include: [{ model: User, attributes: ["id", "username"], as: "author" }],
      order: [["id", "DESC"]],
      limit: limit,
      offset: (page - 1) * limit,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchBlog = async slug => {
  try {
    const response = await Blog.findOne({ where: { slug } });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchUsers = async (limit = 10, page = 1, q = "") => {
  try {
    const whereClause =
      q?.length != 0
        ? {
            [Op.or]: [{ email: { [Op.iLike]: `%${q}%` } }, { username: { [Op.iLike]: `%${q}%` } }],
          }
        : {};

    const response = await User.findAll({
      where: whereClause,
      attributes: ["id", "username", "email"],
      order: [["id", "DESC"]],
      limit: limit,
      offset: (page - 1) * limit,
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchComments = async id => {
  try {
    const response = await Comment.findAll({
      where: { blogId: id },
      include: [User],
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchUser = async id => {
  try {
    const user = await User.findOne({
      where: { id },
      attributes: ["id", "username", "email", "bio", "gender", "contact"],
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchUserByEmail = async email => {
  try {
    const user = await User.findOne({
      where: { email },
      attributes: ["id", "username", "email", "bio", "gender", "contact", "role"],
    });
    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const wait = delay => {
  return new Promise(resolve => setTimeout(resolve, delay));
};
export const fetchBlogCount = async () => {
  try {
    const count = await Blog.count();
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchUserCount = async () => {
  try {
    const count = await User.count();
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchCommentCount = async () => {
  try {
    const count = await Comment.count();
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const fetchUserBlogCount = async id => {
  try {
    const count = await Blog.count({ where: { authorId: id } });
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchUserCommentCount = async id => {
  try {
    const count = await Comment.count({ where: { authorId: id } });
    return count;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
