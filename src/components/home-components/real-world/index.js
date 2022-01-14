import style from './style.css';
import { useState, useEffect } from 'preact/hooks';

const RealWorld = ({ scroll, addClassOnScroll }) => {
  const [realItems, setRealItems] = useState([
    { link: '#', body1: 'wealth', body2: 'Management', icon: 1, readMoreLink: '#' },
    { link: '#', body1: 'audit', body2: 'marketing', icon: 2, readMoreLink: '#' },
    { link: '#', body1: 'Finance', body2: 'consulting', icon: 3, readMoreLink: '#' }
  ])
  const [slideIn, setSlideIn] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    addClassOnScroll(70, setSlideIn)
    addClassOnScroll(250, setFadeIn)
  }, [scroll])
  return (
    <section class={style.realWorld}>
      <div class={`${style.realWorldShape} ${slideIn && style.realWorldShapeSlideIn}`}></div>
      <div class={style.realWorldContainer}>
        <div class={style.realWorldTitle}>
          <h2>real-world experience</h2>
          <span>The best business consulting firm you can count on!</span>
        </div>
        <div class={style.realWorldRow}>
          {realItems.map(item => (
            <div class={`${style.realWorldCol} ${fadeIn && style.fadeIn}`} key={item.body1}>
              <div class={style.realWorldColInner}>
                <h2>
                  <a href={item.link}>{item.body1}<br />{item.body2}</a>
                </h2>
                <a class={style.realWorldLink} href={item.readMoreLink}>Read More</a>
                <div class={style.realWorldColIcon}><span>{item.icon}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default RealWorld;
