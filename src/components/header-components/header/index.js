import style from './style.css';
import HeaderWrapper from '../header-wrapper';
const Header = ({ headerLink, headerSocialLink, openMenu, phone }) => (
	<header class={style.header}>
		<HeaderWrapper headerLink={headerLink} headerSocialLink={headerSocialLink} openMenu={openMenu} phone={phone} />
	</header>
);

export default Header;
