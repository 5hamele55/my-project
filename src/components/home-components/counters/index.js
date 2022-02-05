import style from './style.css';
import { useState } from 'preact/hooks';

const Counters = () => {
  const [list] = useState([
    { title: "Consulting solutions", icon: 1, count: "count1" },
    { title: "Completed Casses", icon: 2, count: "count2" },
    { title: "Satisfied Customers", icon: 3, count: "count3" },
    { title: "Expert Consultant", icon: 4, count: "count4" },
  ])
  return (
    <section class={style.counters}>
      <div class={style.countersBg}></div>
      <div class={style.countersContainer}>
        <ul class={style.countersBox}>
          {list.map(item => (
            <li class={style.countersSingle} key={item.title}>
              <div class={style.countersIcon}><span>{item.icon}</span></div>
              <h3 class={item.count}></h3>
              <p>{item.title}</p>
            </li>))}
        </ul>
      </div>
    </section >
  )
}

export default Counters;