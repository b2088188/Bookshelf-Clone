import React, {useState, useEffect} from 'react';

function ThemeProvider() {
	const [theme, setTheme] = useState('light');
	const nextTheme = light ? 'dark' : 'light';
	function toggleTheme() {
		setTheme(nextTheme);
	}
	useEffect(() => {
		document.body.dataset.theme = theme;
	}, [theme]);
}

export default ThemeProvider;
