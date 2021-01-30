import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs && blogs.map((blog) => (
        <div key={blog.id} className="blog-preview">
         <Link to={`/blogs/${blog.id}`}>
            <h1>{blog.title}</h1>
            <p>   {blog.body}</p>
         </Link>
          <p className="blog-author">written by <span>{blog.author}</span></p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;