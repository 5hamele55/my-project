import style from './style.css';
import { useState } from 'preact/hooks';
const CasesOne = () => {
  return (
    <section class={style.casesOne}>
      <div class={style.casesOneContainer}>
        <div class={style.casesOneTitle}>
          <h2>new case studies</h2>
          <p>We help our clients renew their business</p>
        </div>
      </div>
    </section >
  )
}

export default CasesOne;