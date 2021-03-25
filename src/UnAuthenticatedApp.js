import React from 'react';
import styled from 'styled-components/macro';

function UnAuthenticatedApp() {
	return (
		<div
			css={`
				min-height: 100vh;
				background: url('https://images.adsttc.com/media/images/5f17/67a5/b357/65a5/ed00/0076/large_jpg/Luuk_Kramer_study_library_19260-101.jpg?1595369364')
					no-repeat center/cover;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
		>
			<div>
				<button
					css={`
						color: #fff;
						background: #3f5eb5;
						border: none;
						padding: 1rem 1.5rem;
						border-radius: 5px;
						font-size: 1.7rem;
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
				<button
					css={`
						color: #fff;
						background: #aaa;
						border: none;
						padding: 1rem 1.5rem;
						border-radius: 5px;
						font-size: 1.7rem;
						&:hover {
							cursor: pointer;
						}
						&:focus {
							outline: none;
						}
					`}
				>
					Register
				</button>
			</div>
		</div>
	);
}

export default UnAuthenticatedApp;
