import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components/macro';
import Discover from './pages/Discover';
import Nav from './layout/Nav';
import Header from './layout/Header';

function AuthenticatedApp() {
	return (
		<div
			css={`
				min-height: 200vh;
				display: grid;
				grid-template-rows: 10rem 1fr;
				grid-template-columns: [sidebar-start] 25rem [sidebar-end content-start] 1fr [content-end];
			`}
		>
			<Header />
			<div
				css={`
					grid-row: 2/3;
					grid-column: sidebar-start/sidebar-end;
				`}
			>
				<Nav />
			</div>
			<main
				css={`
					padding: 5rem 0;
					background: #f9f9f9;
					grid-row: 2/3;
					grid-column: content-start / content-end;
				`}
			>
				<Switch>
					<Route path='/discover' component={<Discover />} />
				</Switch>
			</main>
		</div>
	);
}

export default AuthenticatedApp;
