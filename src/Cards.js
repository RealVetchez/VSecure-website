import React from 'react';
import CardItem from './components/CardItem';
import './Cards.css';

const Cards = (props) => {
	var cardData = props.cardData;

	return (
		<div className="cards">
			<h1>{props.Title}</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						{cardData.map((cardData, index) => (
							<CardItem
								src={cardData.src}
								id={cardData.id}
								text={cardData.text}
								label={cardData.label}
								path={cardData.path}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cards;
