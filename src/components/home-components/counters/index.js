import style from './style.css';
import { useState } from 'preact/hooks';

const Counters = () => {
  const [list] = useState([
    { text: 'Lorem ipsum', count: "Hester Ortiz", title: "Customer", icon: "../../../assets/img/testimonials-1-2.png" },
  ])
  return (
    <section class={style.counters}>
      hello
    </section >
  )
}

export default Counters;