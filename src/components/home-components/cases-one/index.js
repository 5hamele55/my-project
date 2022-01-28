import style from './style.css';
import { useState } from 'preact/hooks';
const CasesOne = () => {
  const [items] = useState([
    { img: "../../../assets/img/cases-1-img-1.jpg", icon: "1", title: "businesses growth", body: "Thought leadership" },
    { img: "../../../assets/img/cases-1-img-2.jpg", icon: "2", title: "Marketing advice", body: "Risk management" },
    { img: "../../../assets/img/cases-1-img-3.jpg", icon: "3", title: "finance consulting", body: "Business strategy" }
  ])
  return (
    <section class={style.casesOne}>
      <div class={style.casesOneContainer}>
        <div class={style.casesOneTitle}>
          <h2>new case studies</h2>
          <p>We help our clients renew their business</p>
        </div>
        <div class={style.casesOneRow}>
          {items.map(item => (
            <div class={style.casesOneCol}>
              <div class={style.casesOneSingle}>
                <div class={style.casesOneBox}>
                  <div class={style.casesOneImg}>
                    <img src={item.img} />
                  </div>
                  <div class={style.casesOneContent}>
                    <div class={style.casesOneIcon}>
                      <span>{item.icon}</span>
                    </div>
                    <p>{item.body}</p>
                    <h2><a href='#'>{item.title}</a></h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default CasesOne;