import style from './style.css';
import MainSlider from '../../components/home-components/main-slider';
import RealWorld from '../../components/home-components/real-world';
import BrandOne from '../../components/home-components/brand-one';
const Home = ({ scroll }) => {
	const addClassOnScroll = (position, changeState) => {
		if (scroll > position) changeState(true)
	}
	return (
		<main class={style.home}>
			<MainSlider />
			<RealWorld scroll={scroll} addClassOnScroll={addClassOnScroll} />
			<BrandOne scroll={scroll} addClassOnScroll={addClassOnScroll} />
		</main>
	)
}
export default Home;
