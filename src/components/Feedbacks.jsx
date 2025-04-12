import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import styles from '../styles/Feedbacks.module.css';

export default function Feedbacks() {
  return (
    <section className={styles.feedbackSection} id="feedbacks">
      <h2 className={styles.title}>O que nossos clientes dizem 💬</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img src="/print1.jpg" alt="Feedback 1" className={styles.slideImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/print2.jpg" alt="Feedback 2" className={styles.slideImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/print3.jpg" alt="Feedback 3" className={styles.slideImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/print4.jpg" alt="Feedback 4" className={styles.slideImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/print5.jpg" alt="Feedback 5" className={styles.slideImage} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
