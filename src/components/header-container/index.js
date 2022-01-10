import { Link } from 'preact-router/match';
import style from './style.css';
import logo from '../../assets/img/logo-1.png'
const headerWrapper = ({ headerLink, headerSocialLink }) => (
  <header class={style.header}>
    <div class={style.headerWrapper}>
      <div class={style.headerWrapperLeft}>
        <div class={style.logo}><Link href="/"><img src={logo} /></Link></div>
        <nav>
          <div class={style.hamburger}>
            <div class={`${style.hamburgerLine} ${style.hamburgerLine1}`}></div>
            <div class={`${style.hamburgerLine} ${style.hamburgerLine2}`}></div>
            <div class={`${style.hamburgerLine} ${style.hamburgerLine3}`}></div>
          </div>
          <ul>
            {headerLink.map(link => (
              <li key={link.body}>
                <Link activeClassName={style.active} href={link.href}>{link.body}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div class={style.headerWrapperRight}>
        <div class={style.social}>
          <div class={style.socialBox}>
            {headerSocialLink.map(link => (
              <a key={link.body} href={link.href} class={style.socialLink}>{link.body}</a>
            ))}
          </div>
        </div>
        <div class={style.searchBox}>
          <a href='#' class={style.search}>&#x1F50D;</a>
        </div>
        <div class={style.phone}>
          <p>Need help? Talk to an expert</p>
          <a href="tel:+92-666-888-0000">+92 666 888 0000</a></div>
      </div>
    </div>
  </header>
);

export default headerWrapper;
