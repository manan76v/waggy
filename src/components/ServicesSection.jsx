import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: "la:shopping-cart",
      title: "Free Delivery",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit."
    },
    {
      id: 2,
      icon: "la:user-check",
      title: "100% secure payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit."
    },
    {
      id: 3,
      icon: "la:tag",
      title: "Daily Offer",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit."
    },
    {
      id: 4,
      icon: "la:award",
      title: "Quality guarantee",
      description: "Lorem ipsum dolor sit amet, consectetur adipi elit."
    }
  ]

  return (
    <section id="service">
      <Container>
        <Row className="justify-content-center">
          {services.map((service) => (
            <Col key={service.id} md={3} sm={6}>
              <div className="service-item text-center">
                <iconify-icon className="service-icon text-primary" icon={service.icon}></iconify-icon>
                <h3 className="service-title py-2">{service.title}</h3>
                <p className="service-text">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ServicesSection