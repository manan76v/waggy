import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Foodies",
      icon: "fluent:food-24-filled"
    },
    {
      id: 2,
      name: "Toys",
      icon: "ph:dog-fill"
    },
    {
      id: 3,
      name: "Clothing",
      icon: "material-symbols:checkroom"
    }
  ]

  return (
    <section id="company-services" className="padding-large">
      <Container>
        <Row className="d-flex g-md-5 pt-4">
          {categories.map((category) => (
            <Col key={category.id} lg={4} md={12}>
              <a href="#" className="categories-item text-decoration-none">
                <div className="text-center">
                  <iconify-icon className="category-icon" icon={category.icon}></iconify-icon>
                  <h4 className="fs-1 mt-3 mb-5">{category.name}</h4>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default CategoriesSection