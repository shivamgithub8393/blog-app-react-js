import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch("http://127.0.0.1:8000/blogs/" + id)
  const history = useHistory()

  const handleClick = () => {
    fetch("http://127.0.0.1:8000/blogs/" + blog.id , {
      method: "DELETE"
    }).then(() => {
      console.log("Blog Deleted")
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loding..</div>}
      { error && <div> {error}</div>}
      { blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by <span>{blog.author}</span></p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails;