import style from './style.css';
import { useState } from 'preact/hooks';

const Talking = () => {
  const [list] = useState([
    { text: 'Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: "Hester Ortiz", title: "Customer", img: "../../../assets/img/testimonials-1-2.png" },
    { text: 'Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: "Randall Fleming", title: "Customer", img: "../../../assets/img/testimonials-1-1.png" },
  ])
  return (
    <section class={style.talking}>
      <div class={style.talkingContainer}>
        <div class={style.talkingRow}>
          <div class={style.talkingColL}>
            <div class={style.talkingLeft}>
              <div class={style.talkingTitle}>
                <h2>What they are talking About</h2>
                <span>Trusted by more than 4,200 customers</span>
              </div>
            </div>
          </div>
          <div class={style.talkingColR}>
            <div class={style.talkingRight}>
              <div class={style.talkingCarousel}>
                <div class={style.talkingCarouselOuter}>
                  <div class={style.talkingCarouseInner}>
                    {list.map(item => (
                      <div class={style.talkingCarouseItem} key={item.name}>
                        <div class={style.talkingCarouseItemInner}>
                          <p>{item.text}</p>
                          <div class={style.talkingCarouselClientInfo}>
                            <h5>{item.name}</h5>
                            <p>{item.title}</p>
                          </div>
                          <div class={style.talkingCarouselClientImg}>
                            <img src={item.img} />
                          </div>
                          <div class={style.talkingCarouselQuote}>
                          </div>
                        </div>
                      </div>))}
                  </div>
                </div>
                <div class={style.talkingCarouselNav}>
                  <button><span>&#8592;</span></button>
                  <button><span>&#8594;</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Talking;