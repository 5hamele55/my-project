import style from './style.css';
const OurMission = () => {
  return (
    <section class={style.ourMission}>
      <div class={style.paralax}>
        <div class={style.paralaxContainer}>
          <div class={style.paralaxInner}>
          </div>
        </div>
      </div>
      <div class={style.ourMissionContainer}>
        <div class={style.ourMissionRow}>
          <div class={style.ourMissionCol}>
            <div class={style.ourMissionInner}>
              <h2>Mission is to Protect <br /> your Businesses &amp; <br /> Much More</h2>
              <a href='#'>Discover More</a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default OurMission;