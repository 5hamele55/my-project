import { Router } from 'preact-router';
import { useState } from 'preact/hooks';
import Header from './header';

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
	return (
		<div id="app">
			<Header headerLink={headerLink} headerSocialLink={headerSocialLink} />
			<Router>
				<Home path="/" />
			</Router>
		</div>
	)
}
export default App;
