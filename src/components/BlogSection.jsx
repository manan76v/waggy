import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "You can get a Vaccination for your dog",
      date: "Aug 15, 2022",
      image: "/images/blog1.jpg",
      excerpt: "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis..."
    },
    {
      id: 2,
      title: "The best way to take care of your dog",
      date: "Aug 15, 2022",
      image: "/images/blog2.jpg",
      excerpt: "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis..."
    },
    {
      id: 3,
      title: "How to make your dog happy",
      date: "Aug 15, 2022",
      image: "/images/blog3.jpg",
      excerpt: "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis..."
    }
  ]

  return (
    <section id="latest-blog" className="my-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2 className="display-3 fw-normal">Latest blogs</h2>
              <div>
                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                  Read All
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {blogs.map((blog) => (
            <Col key={blog.id} md={4}>
              <article className="post-item">
                <div className="image-holder zoom-effect">
                  <a href="#">
                    <img src={blog.image} alt="post" className="img-fluid" />
                  </a>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className="post-date">{blog.date}</span>
                  </div>
                  <h3 className="post-title">
                    <a href="#" className="blog-read">{blog.title}</a>
                  </h3>
                  <p className="blog-paragraph">{blog.excerpt}</p>
                  <a href="#" className="blog-read">read more</a>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default BlogSection