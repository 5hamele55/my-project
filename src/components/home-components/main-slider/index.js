import style from './style.css';
import { useState, useEffect } from 'preact/hooks';

const MainSlider = () => {
  const [slides] = useState(["../../../assets/img/main-slider-1-1.jpg", "../../../assets/img/main-slider-1-2.jpg"])
  const [index, setIndex] = useState(0)
  const [curSlide, setCurSlide] = useState(slides[0])
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1)
      setCurSlide(slides[index])
      console.log(curSlide);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section class={style.mainSlider}>
      <div class={style.mainSwiperContainer}>
        <div class={style.mainSwiperWrapper}>
          <div class={`${style.mainSwiperSlide} ${style.SwiperSlideActive}`}>
            <div class={`${style.imageLayer}`} style={`background-image: url(${curSlide})`}></div>
            <div class={style.imageShape1}></div>
            <div class={style.imageShape2}></div>
            <div class={style.imageShape3}></div>
            <div class={style.imageShape4}></div>
            <div class={style.imageShape5}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSlider;