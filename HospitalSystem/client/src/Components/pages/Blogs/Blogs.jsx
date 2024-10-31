import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blogs.css";
import backgroundImg from "../../../assets/images/background.jpg";
import axios from "axios";
import Footer from "./../../shared/Footer/Footer";

const Blogs = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:5000/api/blogPosts");
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog._id}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <header>
        <section
          className="hero-section text-center py-5"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1>From Our Blog</h1>
          <p>
            <strong>Home</strong>-Blogs
          </p>
        </section>
      </header>
      <div className="container">
        <div className="row">
          {blogsData.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`http://localhost:5000/${blog.imgSrc}`} // Full URL path
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: "15rem", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "/placeholder-blog.jpg"; // Fallback image
                    e.target.onerror = null; // Prevent infinite loop
                  }}
                />
                <div className="card-body">
                  <p className="card-blue-text">
                    By Admin {new Date(blog.date).toLocaleDateString()}
                  </p>
                  <h5 className="card-title" style={{ fontSize: "18px" }}>
                    {blog.title}
                  </h5>
                  <p className="card-text">
                    {blog.content.substring(0, 150)}...
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button
                    onClick={() => handleReadMore(blog)}
                    className="btn btn-primary button button-primary w-100"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
