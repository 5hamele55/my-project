import style from './style.css';

const RealWorld = ({ scroll }) => (
  <div class={style.realWorld}>
    <div class={`${style.realWorldShape} ${scroll > 70 && style.realWorldShapeSlideIn}`}></div>
    <div class={style.realWorldContainer}>
      <div class={style.realWorldTitle}>
        <h2>real-world experience</h2>
        <span>The best business consulting firm you can count on!</span>
      </div>
      <div class={style.realWorldRow}>
        <div class={style.realWorldCol}>
          <div class={style.realWorldColInner}>
            <h2>
              <a href="#">wealth <br /> Management</a>
            </h2>
            <a class={style.realWorldLink} href='#'>Read More</a>
            <div class={style.realWorldColIcon}><span>1</span></div>
          </div>
        </div>
        <div class={style.realWorldCol}>
          <div class={style.realWorldColInner}>
            <h2>
              <a href="#">wealth <br /> Management</a>
            </h2>
            <a class={style.realWorldLink} href='#'>Read More</a>
            <div class={style.realWorldColIcon}><span>1</span></div>
          </div>
        </div>
        <div class={style.realWorldCol}>
          <div class={style.realWorldColInner}>
            <h2>
              <a href="#">wealth <br /> Management</a>
            </h2>
            <a class={style.realWorldLink} href='#'>Read More</a>
            <div class={style.realWorldColIcon}><span>1</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default RealWorld;
