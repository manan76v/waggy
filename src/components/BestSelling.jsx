import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BestSelling = () => {
  const products = [
    {
      id: 1,
      image: '/images/item1.jpg',
      title: 'Sunstar Fresh Meaty Rice',
      price: '$18.00',
      originalPrice: '$20.00'
    },
    {
      id: 2,
      image: '/images/item2.jpg',
      title: 'Sunstar Fresh Meaty Rice',
      price: '$18.00',
      originalPrice: '$20.00'
    },
    {
      id: 3,
      image: '/images/item3.jpg',
      title: 'Sunstar Fresh Meaty Rice',
      price: '$18.00',
      originalPrice: '$20.00'
    },
    {
      id: 4,
      image: '/images/item4.jpg',
      title: 'Sunstar Fresh Meaty Rice',
      price: '$18.00',
      originalPrice: '$20.00'
    },
    {
      id: 5,
      image: '/images/item5.jpg',
      title: 'Sunstar Fresh Meaty Rice',
      price: '$18.00',
      originalPrice: '$20.00'
    }
  ];

  return (
    <section id="clothing" className="my-5 overflow-hidden">
      <div className="container pb-5">
        <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
          <h2 className="display-3 fw-normal">Best selling products</h2>
          <div>
            <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
              shop now
              <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
                <use xlinkHref="#arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Swiper
            className="bestselling-swiper"
            slidesPerView={4}
            spaceBetween={30}
            speed={500}
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
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={product.image} alt="product-item" className="img-fluid" />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <a href="#" className="btn btn-medium btn-black">Add to Cart<svg className="cart-outline"><use xlinkHref="#cart-outline"></use></svg></a>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <a href="#">{product.title}</a>
                    </h3>
                    <span className="item-price text-primary">{product.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;