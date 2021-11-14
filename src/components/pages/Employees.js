import React from 'react';
import Cards from '../../Cards';

function Employees() {
	const employeeArray = [
		{
			id: 1,
			src: 'images/profilepic-1.jpg',
			text: 'Physical Security Expert',
			label: 'Alvin Sellers',
			path: '/employees',
		},
		{
			id: 2,
			src: 'images/profilepic-2.jpg',
			text: 'Head Analyst',
			label: 'Jiya Morton',
			path: '/employees',
		},
	];
	return (
		<>
			<Cards cardData={employeeArray} />
		</>
	);
}

export default Employees;
