import style from './style.css';
import { useState, useEffect } from 'preact/hooks';
const News = ({ scroll, addClassOnScroll }) => {
  const [list] = useState([
    {
      title: 'Metrics mission skills.',
      text: "Aellentesque porttitor lacus quis enim varius sed efficitur turpis gilla sed sit amet.",
      img: "../../../assets/img/news-1-1.jpg"
    },
    {
      title: 'solutions total link parallel',
      text: "Aellentesque porttitor lacus quis enim varius sed efficitur turpis gilla sed sit amet.",
      img: "../../../assets/img/news-1-2.jpg"
    },
    {
      title: 'business advice for growth',
      text: "Aellentesque porttitor lacus quis enim varius sed efficitur turpis gilla sed sit amet.",
      img: "../../../assets/img/news-1-3.jpg"
    },
  ])
  const [newsScroll, setNewsScroll] = useState(false)

  useEffect(() => {
    addClassOnScroll(6250, setNewsScroll)
  }, [scroll])
  return (
    <section class={style.news}>
      <div class={style.newsContainer}>
        <div class={style.newsTitle}>
          <h2>What’s Happening</h2>
          <span>Checkout what we have been doing</span>
        </div>
        <div class={style.newsRow}>
          {list.map(item => (
            <div class={`${style.newsCol} ${newsScroll && style.fadeIn}`} key={item.title}>
              <div class={style.newsSingle}>
                <div class={style.newsImg}>
                  <img src={item.img} />
                  <a href="#"><span></span></a>
                </div>
                <div class={style.newsContent}>
                  <ul>
                    <li><a href='#'><i>1</i> by Admin</a></li>
                    <li><span>/</span></li>
                    <li><a href='#'><i>2</i> 2 Comments</a></li>
                  </ul>
                  <h3><a href='#'>{item.title}</a></h3>
                  <p>{item.text}</p>
                  <a href='#'>Read more</a>
                  <div class={style.newsDate}><p>26 mar</p></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default News;