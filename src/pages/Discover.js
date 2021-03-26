import React from 'react';
import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';

function Discover() {
	return (
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
					color: var(--colors-text--main);
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
						position: relative;
						&:hover {
							box-shadow: 1rem 1rem 1rem rgba(200, 200, 200, 0.7);
						}
					`}
				>
					<Link
						to='/book/123'
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
							<h2
								css={`
									color: var(--colors-text--main);
								`}
							>
								Anna Karenina
							</h2>
							<span
								css={`
									color: var(--colors-text--main);
								`}
							>
								Leo Tolstoy
							</span>
							<span
								css={`
									grid-row: 2/3;
									grid-column: 2/3;
									color: var(--colors-text--main);
								`}
							>
								Wordsworth Editions
							</span>
							<p
								css={`
									grid-row: 3/4;
									grid-column: 1/-1;
									color: var(--colors-text--main);
								`}
							>
								A famous legend surrounding the creation of Anna Karenina tells us that
								Tolstoy began writing a cautionary tale about adultery and ended up by
								falling in love with his magnificent heroine. It is rare to find a reader of
								the book who doesn't experience the same kind of emotional upheaval: Anna
								Karenina is filled with major and minor characters who exist in their own
								right and fully embody their mid-nineteenth-century Russian milieu, but it
								still belongs entirely to the woman whose name it bears, whose portrait is
								one of the truest ever made by a writer.
							</p>
						</div>
					</Link>
					<div
						css={`
							position: absolute;
							top: 0;
							width: 5rem;
							height: 100%;
							right: -2.5rem;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: space-around;
						`}
					>
						<button
							css={`
								z-index: 11;
								position: relative;
								color: var(--colors-text--main);
								font-size: 1.7rem;
								background: none;
								border: solid 1px rgba(200, 200, 200, 0.7);
								padding: 1rem;
								border-radius: 50%;
								display: flex;
								align-items: center;
								&:hover {
									color: #3f5eb5;
									cursor: pointer;
								}
								&:focus {
									outline: none;
								}
							`}
						>
							<i className='fas fa-plus-circle'></i>
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
}
//<i class="fas fa-check-circle"></i>
//<i class="fas fa-minus-circle"></i>
export default Discover;
