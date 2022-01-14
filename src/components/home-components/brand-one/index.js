import style from './style.css';
import brandImg from '../../../assets/img/brand--1-2.png'
import { useState } from 'preact/hooks';

const BrandOne = () => {
  const [brandImages, setBrandImages] = useState([
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 1 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 2 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 3 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 4 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 5 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 6 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 7 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 8 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 9 },
    { imgSrc: '../../../assets/img/brand--1-2.png', id: 10 }
  ])
  return (
    <section class={style.brandOne}>
      <div class={style.brandOneContainer}>
        <h4>Meet the partners</h4>
        <div class={style.swiperContainer}>
          <div class={style.swiperWrapper}>
            {brandImages.map(img => (
              <div class={style.swiperSlide} key={img.id}>
                <img src={img.imgSrc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default BrandOne;