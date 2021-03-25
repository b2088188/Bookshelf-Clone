import React from 'react';
import styled from 'styled-components/macro';

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
			<div
				css={`
					grid-row: 2/3;
					grid-column: sidebar-start/sidebar-end;
				`}
			>
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
			</div>
			<main
				css={`
					padding: 5rem 0;
					background: #f9f9f9;
					grid-row: 2/3;
					grid-column: content-start / content-end;
				`}
			>
				<div
					css={`
						max-width: 60rem;
						margin: auto;
					`}
				>
					<div
						css={`
							text-align: center;
							line-height: 1.7;
							margin-bottom: 2.5rem;
						`}
					>
						<p
							css={`
								font-size: 1.5rem;
							`}
						>
							Welcome to the discover page.
						</p>
						<p
							css={`
								font-size: 1.5rem;
							`}
						>
							Here, let me load a few books for you...
						</p>
						<p
							css={`
								font-size: 1.5rem;
							`}
						>
							Here you go! Find more books with the search bar above.
						</p>
					</div>
					<ul>
						<li
							css={`
								border: solid 1px rgba(200, 200, 200, 0.7);
								border-radius: 5px;
							`}
						>
							<a
								href='/'
								css={`
									display: flex;
									padding: 1rem;
								`}
							>
								<div
									css={`
										flex: 0 0 15rem;
									`}
								>
									<img
										css={`
											width: 100%;
											height: 100%;
											vertical-align: middle;
										`}
										src='https://images-na.ssl-images-amazon.com/images/I/514tG8HMsrL._SX317_BO1,204,203,200_.jpg'
										alt=''
									/>
								</div>
								<div
									css={`
										display: grid;
										grid-template-rows: repeat(2, min-content) 1fr;
										grid-template-columns: repeat(2, auto);
										justify-items: center;
										align-items: center;
										padding: 1rem;
									`}
								>
									<h2>Anna Karenina</h2>
									<span
										css={`
											color: #333;
										`}
									>
										Leo Tolstoy
									</span>
									<span
										css={`
											grid-row: 2/3;
											grid-column: 2/3;
											color: #333;
										`}
									>
										Wordsworth Editions
									</span>
									<p
										css={`
											grid-row: 3/4;
											grid-column: 1/-1;
											color: #333;
										`}
									>
										A famous legend surrounding the creation of Anna Karenina tells us
										that Tolstoy began writing a cautionary tale about adultery and ended
										up by falling in love with his magnificent heroine. It is rare to find
										a reader of the book who doesn't experience the same kind of emotional
										upheaval: Anna Karenina is filled with major and minor characters who
										exist in their own right and fully embody their mid-nineteenth-century
										Russian milieu, but it still belongs entirely to the woman whose name
										it bears, whose portrait is one of the truest ever made by a writer.
									</p>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</main>
		</div>
	);
}

export default AuthenticatedApp;
