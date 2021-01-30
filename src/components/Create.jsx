import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('rahul');
  const [isPending, setIsPending] = useState(false)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true)
    const blog = { title, body, author }
    fetch("http://127.0.0.1:8000/blogs", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log("New Blog Added.")
        setIsPending(false)
        // history.go(-2)
        history.push('/')
      })

  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="shivam sharma">Shivam Sharma</option>
          <option value="amit sharma">Amit Sharma</option>
          <option value="abhishek sharma">Abhishek Sharma</option>
          <option value="rahul">Rahul</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Add Blog...</button>}
      </form>
    </div>
  );
}

export default Create;