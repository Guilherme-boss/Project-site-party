import styles from './Content.module.css';
import capa from '/assets/capa.png';
import corpo from '/assets/corpo.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <img src={capa} alt="Capa" className={styles.heroImage} />
            </div>

            <div className={styles.about}>
                <img src={corpo} alt="Sobre a empresa" className={styles.aboutImage} />
                <div className={styles.aboutText}>
                    <h2>Conheça Floquis, o melhor lugar para celebrar!</h2>
                    <p>Nosso espaço foi criado para proporcionar momentos inesquecíveis com muita diversão, segurança e conforto.</p>
                    <p><strong>Contamos com uma estrutura completa</strong>, decoração temática, buffet delicioso e brinquedos incríveis para garantir a alegria das crianças e a tranquilidade dos pais.</p>
                </div>
            </div>

            <div className={styles.gallery}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            <img src="/assets/1.png" alt="Decoração Temática" className={styles.carouselImage} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            <img src="/assets/2.png" alt="Buffet Infantil" className={styles.carouselImage} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            <img src="/assets/3.png" alt="Equipe Especializada" className={styles.carouselImage} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slideContainer}>
                            <img src="/assets/4.png" alt="Muita Diversão" className={styles.carouselImage} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
