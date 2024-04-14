import Blog from "@/models/blog.model";
import Comment from "@/models/comment.model";
import User from "@/models/user.model";

export const fetchUsers = () => {
  try {
    const response = User.findAll();
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchBlogs = async () => {
  try {
    const response = await Blog.findAll({
      attributes: ["id", "title", "slug", "tags", "createdAt", "authorId"],
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchBlogBySlug = async slug => {
  try {
    const response = await Blog.findOne({ where: { slug } });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchComments = async (id)=>{
    try {
        const response = await Comment.findAll({
            where: { blogId: id },
            include: [User],
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}