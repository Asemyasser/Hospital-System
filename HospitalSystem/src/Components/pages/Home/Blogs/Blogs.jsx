import { faAnglesRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import post1 from "../../../../assets/images/post1.jpg";
import post2 from "../../../../assets/images/post2.jpg";
import post3 from "../../../../assets/images/post3.jpg";

function Blogs() {
  const blogs = [post1, post2, post3];
  return (
    <section className="blog padding-tb bg-color">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-header text-center mb-5">
              <h2 className="fw-light">News Feed</h2>
              <h2 className="fw-bolder">Be The First To New Stories</h2>
            </div>
            <div className="row justify-content-center">
              {blogs.map((blog, index) => (
                <div key={index} className="col-12 col-xl-4 col-md-6">
                  <div className="post-item mb-xl-0">
                    <div className="post-img overflow-hidden">
                      <img src={blog} alt="post" className="w-100" />
                    </div>
                    <div className="post-content">
                      <span className="meta">
                        By <a href="#">Admin</a> March 24, 2021
                      </span>
                      <h4>
                        <a href="#">
                          Globa Empoer Extenve Chanels Extensve Creat Method
                        </a>
                      </h4>
                      <p>
                        Complete actuaze centi centrcing colora and sharin
                        without anstaled anding bases aweme medicalplus
                        Template.
                      </p>
                    </div>
                    <div className="blog-footer">
                      <a href="#" className="viewall">
                        Read More{" "}
                        <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                      </a>
                      <a href="#" className="blog-comment">
                        <FontAwesomeIcon icon={faMessage} className="me-2" /> 30
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
