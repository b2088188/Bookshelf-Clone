import React from 'react';
import styled from 'styled-components/macro';

function Header() {
	return (
		<header
			css={`
				background: rgba(255, 255, 255, 0.9);
				padding: 1rem;
				position: fixed;
				width: 100%;
				//grid-column: sidebar-start / content-end;
				display: flex;
				justify-content: space-between;
				align-items: center;
			`}
		>
			<button
				css={`
					border: none;
					background: none;
					font-size: 2rem;
					&:hover {
						cursor: pointer;
					}
					&:focus {
						outline: none;
					}
				`}
			>
				<i class='fas fa-list'></i>
			</button>
			<form
				css={`
					display: flex;
					flex: 0 0 50rem;
				`}
			>
				<input
					type='text'
					placeholder='Search'
					css={`
						flex: 1;
						font-size: 1.7rem;
						padding: 0.5rem 1rem;
						border: solid 1px rgba(200, 200, 200, 0.5);
						&:focus {
							outline: none;
							border: solid 1px #1364af;
						}
					`}
				/>
				<button
					css={`
						padding: 0.5rem 2rem;
						border: solid 1px rgba(200, 200, 200, 0.5);
						color: #777;
						&:hover {
							cursor: pointer;
						}
					`}
				>
					<i class='fas fa-search'></i>
				</button>
			</form>
			<div
				css={`
					position: relative;
				`}
			>
				<button
					css={`
						border: none;
						background: none;
						width: 5rem;
						border-radius: 50%;

						&:hover {
							cursor: pointer;
						}
						&: focus {
							outline: none;
						}
					`}
				>
					<img
						css={`
							width: 100%;
							height: 100%;
							border-radius: 50%;
							vertical-align: middle;
						`}
						src='https://yt3.ggpht.com/yti/ANoDKi7yHzca6gpW_0zVuCuBIVa2vTGiDeBNrvysVw=s88-c-k-c0x00ffffff-no-rj-mo'
						alt=''
					/>
				</button>
				<div
					css={`
						position: absolute;
						background: rgba(255, 255, 255, 0.8);
						top: 100%;
						right: 0;
					`}
				>
					<div
						css={`
							display: flex;
							align-items: center;
							padding: 1.5rem 1rem;
							border-bottom: solid 1px rgba(50, 50, 50, 0.6);
						`}
					>
						<img
							css={`
								width: 5rem;
								height: 5rem;
								border-radius: 50%;
								vertical-align: middle;
							`}
							src='https://yt3.ggpht.com/yti/ANoDKi7yHzca6gpW_0zVuCuBIVa2vTGiDeBNrvysVw=s88-c-k-c0x00ffffff-no-rj-mo'
							alt=''
						/>
						<div
							css={`
								padding: 0 1rem;
								text-align: start;
							`}
						>
							<h3
								css={`
									font-size: 1.5rem;
								`}
							>
								lin lin
							</h3>
							<h4
								css={`
									font-size: 1.3rem;
								`}
							>
								wbccfh16@gmail.com
							</h4>
						</div>
					</div>
					<ul>
						<li
							css={`
								padding: 1rem;
							`}
						>
							<i class='fas fa-sign-out-alt'></i>Sign Out
						</li>
						<li
							css={`
								padding: 1rem;
							`}
						>
							<i class='fas fa-moon'></i>Appearance: Light
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
