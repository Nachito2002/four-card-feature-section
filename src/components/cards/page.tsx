import React from 'react';
import './styles.sass';

// Interface
import { ICardInfo } from './index';

const Page = (props: ICardInfo) => (
	<div className={ `card ${props.color}` }>
		<h2 className="card__title">
			{ props.title }
		</h2>

		<p className="card__description">
			{ props.description }
		</p>

		<img className="card__icon" src={ props.img } alt="" />
	</div>	
);

export default Page;
