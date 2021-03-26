import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components/macro';

function Nav({isNavOpen}) {
	return (
		<nav
			css={`
				padding: 1rem 0;
				position: fixed;
				width: ${isNavOpen ? '25rem' : '8rem'};
			`}
		>
			<NavLink to='/list' isNavOpen={isNavOpen}>
				<i className='fas fa-book'></i>Reading List
			</NavLink>
			<NavLink isNavOpen={isNavOpen}>
				<i className='far fa-check-square'></i>Finished Books
			</NavLink>
			<NavLink to='/discover' isNavOpen={isNavOpen}>
				<i className='fas fa-book-open'></i>Discover
			</NavLink>
		</nav>
	);
}

function NavLink({to, isNavOpen, children}) {
	const {pathname} = useLocation();
	const isMatch = pathname === to;
	return (
		<Link
			to={to}
			css={`
				display: flex;
				flex-direction: ${isNavOpen ? 'row' : 'column'};
				padding: 1rem;
				text-align: center;
				position: relative;
				color: var(--colors-text--main);
				transition: background 0.3s;
				& i {
					font-size: 1.7rem;
					margin-left: 5rem;
					margin-right: 1rem;
					${!isNavOpen ? 'margin:0;' : null}
				}
				&:hover {
					background: var(--colors-background--list);
					&:before {
						width: 100%;
					}
				}
				&:before {
					transition: width 0.3s;
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					height: 3px;
					width: 0;
					background: #3f5eb5;
				}
				${isMatch
					? `
					background: var(--colors-background--list);
				&:before {
					transition: width 0.3s;
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					height: 3px;
					width: 100%;
					background: #3f5eb5;
				}`
					: null}
			`}
		>
			{children}
		</Link>
	);
}

export default Nav;
