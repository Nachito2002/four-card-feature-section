import React from 'react';
import './styles.sass';

const Page = () => (
	<header className="header">
		<h1 className="header__title">
			<span className="header__title__light">
				Reliable, efficient delivery
			</span>

			<span className="header__title__bold">
				Powered by Technology
			</span>
		</h1>

		<p className="header__description">
			Our Artificial intelligence powered tools use millions of
			porject data points to ensure that your project is successful
		</p>
	</header>
);

export default Page;
