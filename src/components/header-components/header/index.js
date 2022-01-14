import style from './style.css';
import HeaderWrapper from '../header-wrapper';
const Header = ({ headerLink, headerSocialLink, openMenu }) => (
	<header class={style.header}>
		<HeaderWrapper headerLink={headerLink} headerSocialLink={headerSocialLink} openMenu={openMenu} />
	</header>
);

export default Header;
