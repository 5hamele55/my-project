import style from './style.css';
const Cta = () => {
  return (
    <section class={style.cta}>
      <div class={style.ctaBg}></div>
      <div class={style.ctaContainer}>
        <div class={style.ctaRow}>
          <div class={style.ctaCol}>
            <div class={style.ctaInner}>
              <div class={style.ctaLeft}>
                <h2>we’re delivering the best <br /> customer experience</h2>
              </div>
              <div class={style.ctaRight}><a href='#'>let’s get started</a></div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Cta;