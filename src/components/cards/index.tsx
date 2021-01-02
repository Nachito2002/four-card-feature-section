import React from 'react';
import Page from './page';

// Icons
import IconCalculator from './../../../public/images/icon-calculator.svg';
import IconKarma from './../../../public/images/icon-karma.svg';
import IconSupervisor from './../../../public/images/icon-supervisor.svg';
import IconTeambuilder from './../../../public/images/icon-team-builder.svg';

export interface ICardInfo {
	title: string,
	description: string,
	img: string,
	color: string
}

const cardsInfo: ICardInfo[] = [
	{
		title: 'Supervisor',
		description: 'Monitor activity to identify project roadblocks',
		img: IconSupervisor,
		color: 'card--color-cyan'
	},
	{
		title: 'Team Builder',
		description: 'Scans our talent network to create the optimal team for your project',
		img: IconTeambuilder,
		color: 'card--color-red'
	},
	{
		title: 'Karma',
		description: 'Regularly evaluates our talent to ensure quality',
		img: IconKarma,
		color: 'card--color-orange'
	},
	{
		title: 'Calculator',
		description: 'Uses data from past projects to provide better delivery estimates',
		img: IconCalculator,
		color: 'card--color-blue'
	}
]

const Cards = () => (
	<React.Fragment>
		{
			cardsInfo.map((e, i) =>
				<Page
					title={ e.title }
					description={ e.description }
					img={ e.img }
					color={ e.color }
					key={ i }
				/>
			)
		}
	</React.Fragment>
)

export default Cards;
