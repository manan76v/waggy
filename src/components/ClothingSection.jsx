import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const ClothingSection = () => {
  const products = [
    {
      id: 1,
      name: "Grey hoodie",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item1.jpg",
      sale: true
    },
    {
      id: 2,
      name: "Grey hoodie",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item2.jpg",
      sale: true
    },
    {
      id: 3,
      name: "Grey hoodie",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item3.jpg",
      sale: true
    },
    {
      id: 4,
      name: "Grey hoodie",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item4.jpg",
      sale: true
    },
    {
      id: 5,
      name: "Grey hoodie",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item5.jpg",
      sale: true
    }
  ]

  return (
    <section id="clothing" className="my-5 overflow-hidden">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2 className="display-3 fw-normal">Pet Clothing</h2>
              <div>
                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                  shop now
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
              }}
              className="bestselling-swiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <Card className="position-relative">
                    {product.sale && (
                      <div className="position-absolute bg-primary text-white m-3 px-3 py-1 fs-7 lh-1 top-0 start-0">Sale</div>
                    )}
                    <a href="#">
                      <img src={product.image} className="img-fluid rounded-4" alt="image" />
                    </a>
                    <Card.Body className="text-center mt-3">
                      <a href="#">
                        <h3 className="card-title pt-4 m-0">{product.name}</h3>
                      </a>
                      <div className="card-text">
                        <span className="rating secondary-font">
                          <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                          5.0
                        </span>
                        <h3 className="secondary-font text-primary">{product.price} <del className="text-black-50">{product.originalPrice}</del></h3>
                        <div className="d-flex flex-wrap mt-3">
                          <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 className="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="#" className="btn-wishlist px-4 pt-3">
                            <iconify-icon icon="fluent:heart-28-filled"></iconify-icon>
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ClothingSection