import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
      <Swiper
        className="main-swiper"
        modules={[Pagination]}
        speed={500}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1 className="display-2 text-uppercase text-dark pb-5">Your Pet deserves the best</h1>
                  <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="image-holder">
                  <img src="/images/banner-img.png" alt="banner" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1 className="display-2 text-uppercase text-dark pb-5">Best destination for your pets</h1>
                  <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="image-holder">
                  <img src="/images/banner-img2.png" alt="banner" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <h1 className="display-2 text-uppercase text-dark pb-5">Only the best for your furry friends</h1>
                  <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="image-holder">
                  <img src="/images/banner-img3.png" alt="banner" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Banner;