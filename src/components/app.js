import { Router } from 'preact-router';
import { useState, useEffect } from 'preact/hooks';
import Header from './header-components/header';
import StrickyHeader from './header-components/stricky-header';
import PhoneMenu from './header-components/phone-menu';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => {
	const [headerLink, setHeaderLink] = useState([
		{ href: "/", body: "home" },
		{ href: "#", body: "services" },
		{ href: "#", body: "pages" },
		{ href: "#", body: "cases" },
		{ href: "#", body: "shop" },
		{ href: "#", body: "blog" },
		{ href: "#", body: "contact" }
	])
	const [headerSocialLink, setHeaderSocialLink] = useState([
		{ href: "#", body: "1" },
		{ href: "#", body: "2" },
		{ href: "#", body: "3" },
		{ href: "#", body: "4" }
	])
	const [menuBtn, setMenuBtn] = useState(false)
	const [scroll, setScroll] = useState(null)
	const handleScroll = () => {
		setScroll(window.scrollY)
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return window.addEventListener('scroll', handleScroll)
	}, [])
	const openMenu = () => {
		setMenuBtn(true)
	}
	const closeMenu = () => {
		setMenuBtn(false)
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
	const addClassOnScroll = (position, changeState) => {
		if (scroll > position) changeState(true)
	}
	return (
		<div id="app">
			<Header headerLink={headerLink} headerSocialLink={headerSocialLink} openMenu={openMenu} />
			<StrickyHeader headerLink={headerLink} headerSocialLink={headerSocialLink} />
			<PhoneMenu menuBtn={menuBtn} closeMenu={closeMenu} headerLink={headerLink} expandLink={expandLink} headerSocialLink={headerSocialLink} />
			<Router>
				<Home path="/" scroll={scroll} addClassOnScroll={addClassOnScroll} />
			</Router>
			<Footer scroll={scroll} addClassOnScroll={addClassOnScroll} headerSocialLink={headerSocialLink} />
			<a href='#smooth' class="scrollTop"><span>&and;</span></a>
		</div>
	)
}
export default App;
