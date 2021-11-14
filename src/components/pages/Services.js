import React from 'react';
import '../../App.css';
import Cards from '../../Cards';

function Services() {
	const cardData1 = [
		{
			id: 1,
			src: 'images/image-1.jpg',
			text: 'Learn about what we can do for you!',
			label: 'Security',
			path: '/services',
		},
		{
			id: 2,
			src: 'images/image-5.jpg',
			text: 'Vigilant experts to detect threats',
			label: 'Focus',
			path: '/services',
		},
	];
	const cardData2 = [
		{
			id: 1,
			src: 'images/image-6.jpg',
			text: 'Customized mobile security services',
			label: 'Flexibility',
			path: '/services',
		},
	];
	return (
		<>
			<h1 className="services">Services</h1>
			<Cards cardData={cardData1} />
			<Cards cardData={cardData2} />
		</>
	);
}

export default Services;
