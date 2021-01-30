import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://127.0.0.1:8000/blogs") 

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;



