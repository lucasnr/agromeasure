import React from 'react';
import { ThemeProvider } from 'styled-components';

import Login from '~/screens/Login';

import light from '~/styles/themes/light';

const AgroMeasureApp: React.FC = () => {
	return (
		<ThemeProvider theme={light}>
			<Login />
		</ThemeProvider>
	);
};

export default AgroMeasureApp;
