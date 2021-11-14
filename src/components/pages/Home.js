import '../../App.css';
import Cards from '../../Cards';
import HeroSection from '../HeroSection';

function Home() {
	const cardData = [
		{
			id: 1,
			src: 'images/image-1.jpg',
			text: 'Learn about what we can do for you!',
			label: 'Security',
			path: '/services',
		},
		{
			id: 2,
			src: 'images/image-7.jpg',
			text: 'Meet the team',
			label: 'People',
			path: '/services',
		},
		{
			id: 3,
			src: 'images/image-2.jpg',
			text: 'Learn about our goals and what drives us',
			label: 'About',
			path: '/services',
		},
	];
	return (
		<>
			<HeroSection />
			<Cards cardData={cardData} />
		</>
	);
}
export default Home;
