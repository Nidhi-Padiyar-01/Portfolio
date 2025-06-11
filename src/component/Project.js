import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../csscomponent/Project.css'; // your custom styles

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Project() {
  return (
    <div className="project-container">
      <h1 className="project-heading">Projects</h1>
      <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  slideToClickedSlide={true} //THIS enables slide on click
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  modules={[EffectCoverflow, Pagination]}
  className="swiper-container"
>

        <SwiperSlide className="swiper-slide">
          <img src="b1.jpg" alt="Hotstar Clone" />
          <p>Hotstar Clone</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="b2.jpg" alt="Food ordering Website" />
          <p>Food Ordering Website</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="b3.jpg" alt="College Website" />
          <p>College Website</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
