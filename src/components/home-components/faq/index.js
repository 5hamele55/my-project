import style from './style.css';
import { useState } from 'preact/hooks';

const Faq = () => {
  const [list] = useState([
    { title: 'Nsectetur cing elit.' },
    { title: 'Suspe ndisse suscipit sagittis leo.' },
    { title: 'Entum estibulum dignissim posuere.' },
    { title: 'If you are going to use a passage.' },
    { title: 'Lorem Ipsum on the tend to repeat.' }
  ])
  const [accordion, setAccordion] = useState([
    { title: ' think ahead and boost your business?', text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.", expanded: true },
    { title: ' How consultancy experts work?', text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable." },
    { title: ' what is the best advice for growth?', text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable." },
    { title: ' How to improve your business?', text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable." },
  ])
  const expandAcc = (id) => {
    const arr = accordion.map(acc => {
      if (acc.title === id) acc.expanded = true
      else if (acc.title === id && acc.expanded === true) acc.expanded = true
      else acc.expanded = false
      return acc
    })
    setAccordion(arr)
  }
  return (
    <section class={style.faq}>
      <div class={style.faqContainer}>
        <div class={style.faqTitle}>
          <h2>Question Answers</h2>
          <p>If you have any more questions, Contact us</p>
        </div>
        <div class={style.faqRow}>
          <div class={style.faqCol}>
            <div class={style.faqLeft}>
              <div class={style.faqAccordionGroup}>
                {accordion.map(acc => (
                  <div onClick={() => expandAcc(acc.title)} key={acc.title} class={`${style.faqAccordion} ${acc.expanded && style.active}`}>
                    <div class={style.faqAccordionTitle}>
                      <h4><span>.</span>{acc.title}</h4>
                    </div>
                    <div class={style.faqAccordionContent}>
                      <div class={style.faqAccInner}>
                        <p>{acc.text}</p>
                      </div>
                    </div>
                  </div>))}
              </div>
            </div>
          </div>
          <div class={style.faqCol}>
            <div class={style.faqRight}>
              <div class={style.faqImg}>
                <img src='../../../assets/img/faq-one-img-1.jpg'></img>
              </div>
              <div class={style.faqBottom}>
                <div class={style.faqListBox}>
                  <ul>
                    {list.map(item => (
                      <li key={item.title}>
                        <div class={style.icon}><span>&#10003;</span></div>
                        <div class={style.text}><p>{item.title}</p></div>
                      </li>))}
                  </ul>
                </div>
                <div class={style.faqExpeiranceBox}>
                  <h2>30</h2>
                  <p>Years of <br /> Expeirence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Faq;