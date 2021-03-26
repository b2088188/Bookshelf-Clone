import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components/macro';
import Nav from './layout/Nav';
import Header from './layout/Header';
import Discover from './pages/Discover';
import Book from './pages/Book';

function AuthenticatedApp() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<div
			css={`
				background: var(--colors-background--main);
				min-height: 200vh;
				display: grid;
				grid-template-rows: 10rem 1fr;
				grid-template-columns: [sidebar-start] ${isNavOpen ? '25rem' : '8rem'} [sidebar-end content-start] 1fr [content-end];
			`}
		>
			<Header setIsNavOpen={setIsNavOpen} />
			<div
				css={`
					grid-row: 2/3;
					grid-column: sidebar-start/sidebar-end;
					background: var(--colors-background--sub);
				`}
			>
				<Nav isNavOpen={isNavOpen} />
			</div>
			<main
				css={`
					padding: 5rem 0;
					grid-row: 2/3;
					grid-column: content-start / content-end;
				`}
			>
				<Switch>
					<Route path='/discover' component={Discover} />
					<Route path='/book/:bookId' component={Book} />
				</Switch>
			</main>
		</div>
	);
}

export default AuthenticatedApp;
