import style from './style.css';
import { useState } from 'preact/hooks';
const Financial = () => {
  const [tabs, setTabs] = useState([
    {
      tab: 'Business Growth',
      single1Icon1: "1",
      single1Title1: "Highest Success Rates",
      single1Text1: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      single1Icon2: "1",
      single1Title2: "We build experience",
      single1Text2: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      single2Text: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
      single2List: [
        "If you are going to use a passage",
        "Lorem Ipsum you need to be sure",
        "There isn't anything embarrassing",
        "Hidden in the middle of text"
      ],
      single3Img: "../../../assets/img/financial-advice-img-1.jpg",
      active: false
    },
    {
      tab: 'Financial Advice',
      single1Icon1: "2",
      single1Title1: "Highest Success Rates",
      single1Text1: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      single1Icon2: "1",
      single1Title2: "We build experience",
      single1Text2: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      single2Text: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
      single2List: [
        "If you are going to use a passage",
        "Lorem Ipsum you need to be sure",
        "There isn't anything embarrassing",
        "Hidden in the middle of text"
      ],
      single3Img: "../../../assets/img/financial-advice-img-1.jpg",
      active: true
    },
    {
      tab: 'Gobal Solutions',
      single1Icon1: "3",
      single1Title1: "Highest Success Rates",
      single1Text1: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      single1Icon2: "1",
      single1Title2: "We build experience",
      single1Text2: "Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin, lorem is simply free text quis bibendum.",
      single2Text: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form injected humour or randomised words which don't look believable.",
      single2List: [
        "If you are going to use a passage",
        "Lorem Ipsum you need to be sure",
        "There isn't anything embarrassing",
        "Hidden in the middle of text"
      ],
      single3Img: "../../../assets/img/financial-advice-img-1.jpg",
      active: false
    }
  ])
  const activeTab = (id) => {
    const arr = tabs.map(item => {
      if (item.tab === id) item.active = true
      else if (item.tab === id && item.active === true) item.active = true
      else item.active = false
      return item
    })
    setTabs(arr)
  }
  return (
    <section class={style.financial}>
      <div class={style.financialContainer}>
        <div class={style.financialRow}>
          <div class={style.financialCol}>
            <div class={style.financialBox}>
              <ul class={style.tabBtns}>
                {tabs.map(item => (<li class={item.active && style.active} key={item.tab} onClick={() => activeTab(item.tab)}><span>{item.tab}</span></li>))}
              </ul>
              <div class={style.financialContent}>
                <div class={style.financialTab}>
                  <div class={style.financialTabContent}>
                    {tabs.filter(item => item.active === true).map(item => (
                      <div class={style.financialTabRow}>
                        <div class={style.financialTabCol}>
                          <div class={style.financialTabSingle1}>
                            <ul>
                              <li>
                                <div class={style.financialTabSingle1Icon}><span>{item.single1Icon1}</span></div>
                                <div class={style.financialTabSingle1Content}>
                                  <h3>{item.single1Title1}</h3>
                                  <p>{item.single1Text1}</p>
                                </div>
                              </li>
                              <li>
                                <div class={style.financialTabSingle1Icon}><span>{item.single1Icon2}</span></div>
                                <div class={style.financialTabSingle1Content}>
                                  <h3>{item.single1Title2}</h3>
                                  <p>{item.single1Text2}</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class={style.financialTabCol}>
                          <div class={style.financialTabSingle2}>
                            <p>{item.single2Text}</p>
                            <ul>
                              {item.single2List.map(i => (
                                <li>{i}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div class={style.financialTabCol}>
                          <div class={style.financialTabSingle3}>
                            <div class={style.financialTabSingle3Img}>
                              <img src={item.single3Img}></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Financial;