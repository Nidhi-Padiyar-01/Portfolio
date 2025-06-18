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
          <img src="p1.png" alt="Employee Management System" />
          <p>Employee Management System</p>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="p2.png" alt="Emergency App" />
          <p>Emergency App
            <a href='https://github.com/Nidhi-Padiyar-01/Safe_Tap.git'>🔗</a>
          </p>
          
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="p3.png" alt="Parking Space Counter" />
          <p>Park Vision
            <a href='https://github.com/Nidhi-Padiyar-01/ParkingSpaceCounter.git'>🔗</a>
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
