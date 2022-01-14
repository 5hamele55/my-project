import { Link } from 'preact-router/match';
import style from './style.css';
import Logo from '../../logo'
import { phone, mail } from '../../../vars'
const PhoneMenu = ({ menuBtn, closeMenu, headerLink, expandLink, headerSocialLink }) => {
  const handleClick = (id) => expandLink(id)
  return (
    <div class={`${style.phoneMenuWrapper} ${menuBtn && style.phoneMenuOpen}`}>
      <div class={style.phoneMenuOverlay} onClick={closeMenu}></div>
      <div class={style.phoneMenuContent}>
        <span class={style.menuCloseBtn} onClick={closeMenu}>&times;</span>
        <div class={style.phoneMenuLogo}><Logo /></div>
        <div class={style.navContainer}>
          <ul>
            {headerLink.map(link => (
              <li key={link.body}>
                <Link href={link.href}>{link.body}
                  <button class={link.expanded && style.expanded} onClick={() => handleClick(link.body)}>&#10095;</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul class={style.phoneMenuContact}><li><span>&#9993;</span><a href={`mailto:${mail}`}>{mail}</a></li></ul>
        <ul class={style.phoneMenuContact}><li><span>&#128222;</span><a href={`mailto:${phone.trim()}`}>{phone}</a></li></ul>
        <div class={style.phoneMenuSocial}>
          <div class={style.phoneMenuSocialBox}>
            {headerSocialLink.map(link => (
              <Link key={link.body} href={link.href} class={style.phoneMenuSocialLink}>{link.body}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PhoneMenu;
