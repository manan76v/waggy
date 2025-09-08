import React, { useState } from 'react';

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  return (
    <>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.png" className="logo" alt="Waggy" />
            </a>
            <button 
              className="navbar-toggler d-flex d-lg-none order-3 p-2" 
              type="button" 
              onClick={() => setIsOffcanvasOpen(true)}
              aria-label="Toggle navigation"
            >
              <iconify-icon className="navbar-toggler-icon" icon="solar:list-bold"></iconify-icon>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar" style={{display: isOffcanvasOpen ? 'block' : 'none'}}>
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="/">
                  <img src="/images/logo.png" className="logo" alt="Waggy" />
                </a>
                <button 
                  type="button" 
                  className="btn-close btn-close-black" 
                  onClick={() => setIsOffcanvasOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link me-4 active" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#company-services">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Shop</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="shop.html" className="dropdown-item">Shop</a>
                      </li>
                      <li>
                        <a href="shop-grid.html" className="dropdown-item">Shop Grid</a>
                      </li>
                      <li>
                        <a href="shop-list.html" className="dropdown-item">Shop List</a>
                      </li>
                      <li>
                        <a href="single-product.html" className="dropdown-item">Single Product</a>
                      </li>
                      <li>
                        <a href="cart.html" className="dropdown-item">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="about.html" className="dropdown-item">About</a>
                      </li>
                      <li>
                        <a href="blog.html" className="dropdown-item">Blog</a>
                      </li>
                      <li>
                        <a href="single-post.html" className="dropdown-item">Single Post</a>
                      </li>
                      <li>
                        <a href="contact.html" className="dropdown-item">Contact</a>
                      </li>
                      <li>
                        <a href="faqs.html" className="dropdown-item">FAQs</a>
                      </li>
                      <li>
                        <a href="account.html" className="dropdown-item">Account</a>
                      </li>
                      <li>
                        <a href="thankyou.html" className="dropdown-item">Thank You</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#latest-blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <div className="user-items ps-5">
                      <ul className="d-flex justify-content-end list-unstyled">
                        <li className="search-item pe-3">
                          <a href="#" className="search-button">
                            <iconify-icon className="search-icon" icon="tabler:search"></iconify-icon>
                          </a>
                        </li>
                        <li className="pe-3">
                          <a href="#">
                            <iconify-icon className="user-icon" icon="healthicons:person"></iconify-icon>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <iconify-icon className="cart-icon" icon="mdi:cart"></iconify-icon>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;