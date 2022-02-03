import { Link } from 'preact-router/match';
import style from './style.css';
import Logo from '../../logo'
import { phone } from '../../../vars'
const headerWrapper = ({ headerLink, headerSocialLink, openMenu }) => (
  <header class={style.header}>
    <div class={style.headerWrapper}>
      <div class={style.headerWrapperLeft}>
        <div class={style.logo}><Logo /></div>
        <nav>
          <div class={style.hamburger} onClick={openMenu}>
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
              <Link key={link.body} href={link.href} class={style.socialLink}>{link.body}</Link>
            ))}
          </div>
        </div>
        <div class={style.searchBox}>
          <Link href='#' class={style.search}>&#x1F50D;</Link>
        </div>
        <div class={style.phone}>
          <p>Need help? Talk to an expert</p>
          <a href={`tel:${phone.trim()}`}>{phone}</a></div>
      </div>
    </div>
  </header>
);

export default headerWrapper;
