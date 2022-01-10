import style from './style.css';
import HeaderWrapper from '../header-container';
const Header = ({ headerLink, headerSocialLink }) => (
	<header class={style.header}>
		<HeaderWrapper headerLink={headerLink} headerSocialLink={headerSocialLink} />
	</header>
);

export default Header;
