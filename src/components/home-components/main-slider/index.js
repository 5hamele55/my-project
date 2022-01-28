import style from './style.css';
import { useState, useEffect } from 'preact/hooks';

const MainSlider = () => {
  const [slides] = useState(["../../../assets/img/main-slider-1-1.jpg", "../../../assets/img/main-slider-1-2.jpg"])
  const [index, setIndex] = useState(0)
  const [curSlide, setCurSlide] = useState(slides[1])
  const [toggleClass, setToggleClass] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setToggleClass(false)
      if (index >= slides.length - 1) setIndex(0)
      else if (index < 0) setIndex(slides.length - 1)
      else setIndex(prev => prev + 1)
      setCurSlide(slides[index])
    }, 7000);
    return () => {
      setToggleClass(true)
      clearInterval(interval);
    }
  }, [index]);
  return (
    <section class={style.mainSlider} id="smooth">
      <div class={style.mainSwiperContainer}>
        <div class={style.mainSwiperWrapper}>
          <div class={`${style.mainSwiperSlide} ${toggleClass && style.SwiperSlideActive}`}>
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