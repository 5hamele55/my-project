import { Link } from 'preact-router/match';
import style from './style.css';
import logo from '../../assets/img/logo-1.png'
const Logo = () => (
  <Link href="/" class={style.logoLink}><img src={logo} /></Link>
);

export default Logo;