import React, { useState } from 'react'
import { Navbar, Nav, Container, Offcanvas, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
          <Container fluid>
            <Link className="navbar-brand" to="/">
              <img src="/images/logo.png" className="logo" alt="Waggy" />
            </Link>
            <Button
              className="navbar-toggler d-flex d-lg-none order-3 p-2"
              type="button"
              onClick={handleShow}
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <iconify-icon className="navbar-toggler-icon" icon="solar:list-bold"></iconify-icon>
            </Button>
            <div className="collapse navbar-collapse order-lg-2" id="bdNavbar">
              <Nav className="text-dark navbar-nav ms-auto mb-2 mb-lg-0">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" className="nav-link me-4 active">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link me-4">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link me-4">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link me-4">Pages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link me-4">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link me-4">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="d-none d-lg-flex align-items-end">
                <ul className="d-flex justify-content-end list-unstyled m-0">
                  <li>
                    <a href="#" className="mx-3">
                      <iconify-icon icon="healthicons:person" className="fs-4"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mx-3">
                      <iconify-icon icon="mdi:heart" className="fs-4"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      <iconify-icon icon="mdi:cart" className="fs-4 position-relative"></iconify-icon>
                      <span className="position-absolute translate-middle badge rounded-circle bg-primary border border-light">
                        03
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </nav>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link href="#" onClick={handleClose}>About</Nav.Link>
            <Nav.Link href="#" onClick={handleClose}>Shop</Nav.Link>
            <Nav.Link href="#" onClick={handleClose}>Pages</Nav.Link>
            <Nav.Link href="#" onClick={handleClose}>Blog</Nav.Link>
            <Nav.Link href="#" onClick={handleClose}>Contact</Nav.Link>
          </Nav>
          <div className="mt-4">
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="#">
                  <iconify-icon icon="healthicons:person" className="fs-4"></iconify-icon>
                </a>
              </li>
              <li className="me-3">
                <a href="#">
                  <iconify-icon icon="mdi:heart" className="fs-4"></iconify-icon>
                </a>
              </li>
              <li>
                <a href="#">
                  <iconify-icon icon="mdi:cart" className="fs-4"></iconify-icon>
                </a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header