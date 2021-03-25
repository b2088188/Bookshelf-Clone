import React from 'react';

function LoginForm({ title }) {
	return (
		<form
			css={`
				width: 60%;
				margin: auto;
				color: #fff;
				display: grid;
				grid-gap: 2.5rem 0;
				padding: 2.5rem 0;
			`}
		>
			<h2
				css={`
					font-size: 2.5rem;
				`}
			>
				User Login
			</h2>
			<div
				css={`
					display: flex;
					flex-direction: column;
				`}
			>
				<label
					css={`
						font-size: 1.7rem;
					`}
					htmlFor='username'
				>
					Username
				</label>
				<input
					type='text'
					id='username'
					css={`
						padding: 1rem;
					`}
				/>
			</div>
			<div
				css={`
					display: flex;
					flex-direction: column;
				`}
			>
				<label
					css={`
						font-size: 1.7rem;
					`}
					htmlFor='password'
				>
					Password
				</label>
				<input
					type='password'
					id='password'
					css={`
						padding: 1rem;
					`}
				/>
			</div>
			<div
				css={`
					display: flex;
				`}
			>
				<button
					css={`
						color: #fff;
						background: #3f5eb5;
						border: none;
						padding: 1rem 1.5rem;
						border-radius: 5px;
						font-size: 1.7rem;
						flex: 1;
						margin-right: 1rem;
						&:hover {
							cursor: pointer;
						}
						&:focus {
							outline: none;
						}
					`}
				>
					Login
				</button>
				<ModalCloseButton>
					<button
						css={`
							color: #fff;
							background: #888;
							border: none;
							padding: 1rem 1.5rem;
							border-radius: 5px;
							font-size: 1.7rem;
							flex: 1;
							margin-left: 1rem;
							&:hover {
								cursor: pointer;
							}
							&:focus {
								outline: none;
							}
						`}
					>
						Cancel
					</button>
				</ModalCloseButton>
			</div>
		</form>
	);
}

export default LoginForm;
