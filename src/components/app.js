import { Router } from 'preact-router';
import { useState } from 'preact/hooks';
import Header from './header-components/header';
import StrickyHeader from './header-components/stricky-header';
import PhoneMenu from './header-components/phone-menu';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => {
	const [headerLink, setHeaderLink] = useState([
		{ href: "/", body: "home", expanded: false },
		{ href: "#", body: "services", expanded: false },
		{ href: "#", body: "pages", expanded: false },
		{ href: "#", body: "cases", expanded: false },
		{ href: "#", body: "shop", expanded: false },
		{ href: "#", body: "blog", expanded: false },
		{ href: "#", body: "contact", expanded: false }
	])
	const [headerSocialLink, setHeaderSocialLink] = useState([
		{ href: "#", body: "1" },
		{ href: "#", body: "2" },
		{ href: "#", body: "3" },
		{ href: "#", body: "4" }
	])
	const [phone, setPhone] = useState('+92 666 888 0000')
	const [mail, setMail] = useState('needhelp@aivons.com')
	const [menuBtn, setMenuBtn] = useState(false)
	const openMenu = () => {
		setMenuBtn(true)
		console.log(menuBtn)
	}
	const closeMenu = () => {
		setMenuBtn(false)
		console.log(menuBtn)
	}
	const expandLink = (id) => {
		const arr = headerLink.map(link => {
			if (link.body === id) {
				link.expanded = !link.expanded
			}
			return link
		})
		setHeaderLink(arr)
	}
	return (
		<div id="app">
			<Header headerLink={headerLink} headerSocialLink={headerSocialLink} openMenu={openMenu} phone={phone} />
			<StrickyHeader headerLink={headerLink} headerSocialLink={headerSocialLink} phone={phone} />
			<PhoneMenu menuBtn={menuBtn} closeMenu={closeMenu} phone={phone} headerLink={headerLink} expandLink={expandLink} headerSocialLink={headerSocialLink} mail={mail} phone={phone} />
			<Router>
				<Home path="/" />
			</Router>
		</div>
	)
}
export default App;
