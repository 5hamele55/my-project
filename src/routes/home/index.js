import style from './style.css';
import MainSlider from '../../components/home-components/main-slider';
import RealWorld from '../../components/home-components/real-world';
import BrandOne from '../../components/home-components/brand-one';
import WelcomeOne from '../../components/home-components/welcome-one';
import TwoBoxes from '../../components/home-components/two-boxes';
import CasesOne from '../../components/home-components/cases-one';
import OurMission from '../../components/home-components/our-mission';
import Faq from '../../components/home-components/faq';
import Talking from '../../components/home-components/talking';
import Counters from '../../components/home-components/counters';

const Home = ({ scroll }) => {
	const addClassOnScroll = (position, changeState) => {
		if (scroll > position) changeState(true)
	}
	return (
		<main class={style.home}>
			<MainSlider />
			<RealWorld scroll={scroll} addClassOnScroll={addClassOnScroll} />
			<BrandOne scroll={scroll} addClassOnScroll={addClassOnScroll} />
			<WelcomeOne scroll={scroll} addClassOnScroll={addClassOnScroll} />
			<TwoBoxes />
			<CasesOne scroll={scroll} addClassOnScroll={addClassOnScroll} />
			<OurMission />
			<Faq />
			<Talking />
			<Counters scroll={scroll} addClassOnScroll={addClassOnScroll} />
		</main>
	)
}
export default Home;
