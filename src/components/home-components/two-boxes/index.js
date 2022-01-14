import style from './style.css';

const TwoBoxes = () => (
  <section class={style.twoBoxes}>
    <div class={style.twoBoxesContainer}>
      <div class={style.twoBoxesRow}>
        <div class={style.twoBoxesCol}>
          <div class={style.twoBoxesSingle}>
            <div class={style.twoBoxesSingleContent}>
              <div class={style.twoBoxesCount}><span>01</span></div>
              <div class={style.twoBoxesContent}>
                <h3 class={style.twoBoxesTitle}>Get professional advice</h3>
                <p class={style.twoBoxesText}>There are many variations of available but the majority
                  have suffered alteration.</p>
              </div>
            </div>
          </div>
        </div>
        <div class={style.twoBoxesCol}>
          <div class={style.twoBoxesSingle}>
            <div class={style.twoBoxesSingleContent}>
              <div class={style.twoBoxesCount}><span>02</span></div>
              <div class={style.twoBoxesContent}>
                <h3 class={style.twoBoxesTitle}>trusted & professional</h3>
                <p class={style.twoBoxesText}>There are many variations of available but the majority
                  have suffered alteration.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TwoBoxes;