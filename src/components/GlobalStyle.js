import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html{
		font-size:62.5%;
		font-family: 'Open Sans', sans-serif;
	}
	html,
	body{
		height:100%;
		box-sizing:border-box;
	}
	*,
	*:before,
	*:after{
		margin:0;
		padding:0;
		list-style:none;
		box-sizing:inherit;
	}
	a{
		text-decoration:none;
	}
`;

export default GlobalStyle;
