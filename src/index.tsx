import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';

import light from '~/styles/themes/light';

const AgroMeasureApp: React.FC = () => {
	return (
		<ThemeProvider theme={light}>
			<Routes />
			<StatusBar translucent={true} backgroundColor="transparent" />
		</ThemeProvider>
	);
};

export default AgroMeasureApp;
