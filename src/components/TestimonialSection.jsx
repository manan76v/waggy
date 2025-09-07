import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Container, Row, Col } from 'react-bootstrap'

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Lewis",
      content: "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.",
      image: "/images/reviewer-1.jpg"
    },
    {
      id: 2,
      name: "Dani White",
      content: "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.",
      image: "/images/reviewer-2.jpg"
    },
    {
      id: 3,
      name: "Lila Mao",
      content: "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.",
      image: "/images/reviewer-3.jpg"
    }
  ]

  return (
    <section id="testimonials" className="position-relative">
      <Container>
        <Row>
          <Col md={12}>
            <div className="review-content position-relative">
              <div className="swiper-icon">
                <iconify-icon icon="material-symbols:format-quote" className="quote-icon position-absolute"></iconify-icon>
              </div>
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="testimonial-detail text-center">
                      <div className="client-info">
                        <div className="d-flex align-items-center justify-content-center">
                          <img src={testimonial.image} alt="reviewer" className="img-fluid rounded-circle me-3" />
                        </div>
                      </div>
                      <div className="review-title text-uppercase text-center m-0">
                        {testimonial.name}
                      </div>
                      <p className="testimonial-content fs-2 text-center m-0 py-4">
                        {testimonial.content}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TestimonialSection