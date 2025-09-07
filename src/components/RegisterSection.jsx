import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const RegisterSection = () => {
  return (
    <section id="register" className="bg-light-gray padding-large">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={5}>
            <div className="register-content">
              <h2 className="register-title display-4 pb-3">Get <span className="text-primary">20% OFF</span> on your first purchase</h2>
              <p>Sign Up for our newsletter and never miss any offers</p>
            </div>
          </Col>
          <Col md={5}>
            <Form>
              <Row>
                <Col lg={6} className="mb-3">
                  <Form.Control type="text" name="fname" placeholder="First Name" className="form-control" />
                </Col>
                <Col lg={6} className="mb-3">
                  <Form.Control type="text" name="lname" placeholder="Last Name" className="form-control" />
                </Col>
                <Col lg={12} className="mb-3">
                  <Form.Control type="email" name="email" placeholder="Your Email Addresss" className="form-control" />
                </Col>
                <Col lg={12} className="mb-3">
                  <Form.Control type="password" name="password" placeholder="Password" className="form-control" />
                </Col>
                <Col lg={12} className="d-grid">
                  <Button variant="dark" className="btn-dark btn-lg rounded-1">Register it now</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default RegisterSection