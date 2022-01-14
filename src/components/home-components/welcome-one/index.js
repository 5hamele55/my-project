import style from './style.css';
import img1 from '../../../assets/img/welcome-1-img-1.jpg';
import img2 from '../../../assets/img/welcome-1-img-2.jpg';
import { phone } from '../../../vars'
import { useState, useEffect } from 'preact/hooks';

const WelcomeOne = ({ scroll, addClassOnScroll }) => {
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    addClassOnScroll(1500, setProgress)
  }, [scroll])
  return (
    <section class={style.welcomeOne}>
      <div class={style.welcomeOneContainer}>
        <div class={style.welcomeOneRow}>
          <div class={style.welcomeOneCol}>
            <div class={style.welcomeOneLeft}>
              <div class={style.welcomeOneImgBox}>
                <div class={style.welcomeOneImg1}>
                  <img src={img1} />
                </div>
                <div class={style.welcomeOneImg2}>
                  <img src={img2} />
                </div>
              </div>
            </div>
          </div>
          <div class={style.welcomeOneCol}>
            <div class={style.welcomeOneRight}>
              <h2 class={style.welcomeOneTitle}>We’re leading in the market</h2>
              <p class={style.welcomeOneText1}>Lorem ipsum is simply free text dolor sit amet, consectetur
                notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua lonm andhn.</p>
              <p class={style.welcomeOneText2}>We have 35+ years of experience. We offer marketing and
                consulting services</p>
              <div class={`${style.welcomeOneProgress}  ${progress && style.loaded}`}>
                <div clas={style.welcomeOneProgressSingle}>
                  <div class={style.welcomeOneBar}>
                    <div class={`${style.welcomeOneBarInner} ${style.loadedBar1}`}>
                      <div class={style.welcomeOneCountText}>88%</div>
                    </div>
                  </div>
                  <h4>Consulting</h4>
                </div>
                <div clas={style.welcomeOneProgressSingle}>
                  <div class={style.welcomeOneBar}>
                    <div class={`${style.welcomeOneBarInner} ${style.loadedBar2}`}>
                      <div class={style.welcomeOneCountText}>68%</div>
                    </div>
                  </div>
                  <h4>Advices</h4>
                </div>
              </div>
              <div class={style.welcomeOneCall}>
                <div class={style.welcomeOneCallIcon}><span>&#128222;</span></div>
                <div class={style.welcomeOneCallText}>
                  <p>Have any question? Give us a call</p>
                  <a href={`tel:${phone.trim()}`}>{phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WelcomeOne;