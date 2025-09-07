import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const FoodiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('*')

  const products = [
    {
      id: 1,
      name: "Costume",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item5.jpg",
      category: "costume",
      sale: true
    },
    {
      id: 2,
      name: "Costume",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item6.jpg",
      category: "costume",
      sale: true
    },
    {
      id: 3,
      name: "Toy",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item7.jpg",
      category: "toy",
      sale: true
    },
    {
      id: 4,
      name: "Toy",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item8.jpg",
      category: "toy",
      sale: true
    },
    {
      id: 5,
      name: "Food",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item9.jpg",
      category: "food",
      sale: true
    },
    {
      id: 6,
      name: "Food",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item10.jpg",
      category: "food",
      sale: true
    },
    {
      id: 7,
      name: "Food",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item11.jpg",
      category: "food",
      sale: true
    },
    {
      id: 8,
      name: "Food",
      price: "$18.00",
      originalPrice: "$24.00",
      image: "/images/item12.jpg",
      category: "food",
      sale: true
    }
  ]

  const filters = [
    { key: '*', label: 'All' },
    { key: 'costume', label: 'Costume' },
    { key: 'toy', label: 'Toy' },
    { key: 'food', label: 'Food' }
  ]

  const filteredProducts = activeFilter === '*' 
    ? products 
    : products.filter(product => product.category === activeFilter)

  return (
    <section id="foodies" className="my-5">
      <Container>
        <Row>
          <Col md={12}>
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2 className="display-3 fw-normal">Pet Foodies</h2>
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
            <div className="isotope-container">
              <div className="row">
                <Col className="col-md-12">
                  <div className="isotope-filters">
                    <div className="button-group d-flex flex-wrap gap-4 py-5">
                      {filters.map((filter) => (
                        <button
                          key={filter.key}
                          className={`filter-button ${activeFilter === filter.key ? 'active' : ''}`}
                          data-filter={filter.key}
                          onClick={() => setActiveFilter(filter.key)}
                        >
                          {filter.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </Col>
              </div>
              <Row className="isotope-container">
                {filteredProducts.map((product) => (
                  <Col key={product.id} lg={3} md={4} sm={6} className="item mb-5">
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
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FoodiesSection