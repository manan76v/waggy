import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Container, Row, Col, Button } from 'react-bootstrap'

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Best destination for your pets",
      subtitle: "Pet Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      image: "/images/banner-img.png",
      bgColor: "bg-warning-subtle"
    },
    {
      id: 2,
      title: "Best destination for your pets",
      subtitle: "Pet Care",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      image: "/images/banner-img2.png",
      bgColor: "bg-info-subtle"
    },
    {
      id: 3,
      title: "Best destination for your pets",
      subtitle: "Pet Care", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      image: "/images/banner-img3.png",
      bgColor: "bg-success-subtle"
    }
  ]

  return (
    <section id="billboard" className="position-relative overflow-hidden bg-light-yellow">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="main-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`swiper-slide ${slide.bgColor}`}>
              <Container>
                <Row className="d-flex align-items-center">
                  <Col md={6}>
                    <div className="banner-content">
                      <h1 className="display-2 text-uppercase text-dark pb-5">{slide.title}</h1>
                      <Button variant="outline-dark" className="btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                        shop now
                      </Button>
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="image-holder">
                      <img src={slide.image} alt="banner" className="img-fluid" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection