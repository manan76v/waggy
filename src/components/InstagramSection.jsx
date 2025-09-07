import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const InstagramSection = () => {
  const instagramImages = [
    { id: 1, image: "/images/insta1.jpg" },
    { id: 2, image: "/images/insta2.jpg" },
    { id: 3, image: "/images/insta3.jpg" },
    { id: 4, image: "/images/insta4.jpg" },
    { id: 5, image: "/images/insta5.jpg" },
    { id: 6, image: "/images/insta6.jpg" }
  ]

  return (
    <section id="insta" className="my-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header text-center mb-5">
              <h2 className="display-3 fw-normal">Shop our insta</h2>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-wrap">
          {instagramImages.map((item) => (
            <Col key={item.id} lg={2} md={4} sm={6}>
              <div className="instagram-item pe-2">
                <a href="#" className="image-link position-relative">
                  <img src={item.image} alt="instagram" className="insta-image img-fluid rounded-3" />
                  <div className="icon-overlay d-flex justify-content-center position-absolute">
                    <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default InstagramSection