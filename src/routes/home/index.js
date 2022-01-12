import style from './style.css';
import MainSlider from '../../components/home-components/main-slider';
import RealWorld from '../../components/home-components/real-world';
const Home = ({ scroll }) => (
	<div class={style.home}>
		<MainSlider />
		<RealWorld scroll={scroll} />
	</div>
);

export default Home;
