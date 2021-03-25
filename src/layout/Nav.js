import React from 'react';
import styled from 'styled-components/macro';

function Nav() {
	return (
		<nav
			css={`
				padding: 1rem 0;
				position: fixed;
				width: 25rem;
			`}
		>
			<a
				href='/'
				css={`
					display: block;
					padding: 1rem;
					text-align: center;
					position: relative;
					color: #333;
					transition: background 0.3s;
					&:hover {
						background: #f1f1f4;
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
				`}
			>
				Reading List
			</a>
			<a
				href='/'
				css={`
					display: block;
					padding: 1rem;
					text-align: center;
					position: relative;
					color: #333;
					transition: background 0.3s;
					&:hover {
						background: #f1f1f4;
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
				`}
			>
				Finished Books
			</a>
			<a
				href='/'
				css={`
					display: block;
					padding: 1rem;
					text-align: center;
					position: relative;
					color: #333;
					transition: background 0.3s;
					&:hover {
						background: #f1f1f4;
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
				`}
			>
				Discover
			</a>
		</nav>
	);
}

export default Nav;
