import style from './style.css';
import { useState } from 'preact/hooks';

const RealWorld = ({ scroll }) => {
  const [realItems, setRealItems] = useState([
    { link: '#', body1: 'wealth', body2: 'Management', icon: 1, readMoreLink: '#' },
    { link: '#', body1: 'audit', body2: 'marketing', icon: 2, readMoreLink: '#' },
    { link: '#', body1: 'Finance', body2: 'consulting', icon: 3, readMoreLink: '#' }
  ])
  return (
    <div class={style.realWorld}>
      <div class={`${style.realWorldShape} ${scroll > 70 && style.realWorldShapeSlideIn}`}></div>
      <div class={style.realWorldContainer}>
        <div class={style.realWorldTitle}>
          <h2>real-world experience</h2>
          <span>The best business consulting firm you can count on!</span>
        </div>
        <div class={style.realWorldRow}>
          {realItems.map(item => (
            <div class={style.realWorldCol}>
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
    </div>
  )
}
export default RealWorld;
