import React from 'react';
import Header from './components/header';
import Cards from './components/cards';

// Styles
import './preset-styles/normalize.scss';
import './App.sass';

const App = () => (
	<React.Fragment>
		<Header />
		<main>
			<article className="article-cards">
				<Cards />
			</article>
		</main>
	</React.Fragment>
)

export default App;
