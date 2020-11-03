import React from 'react';
import { ThemeProvider } from 'styled-components';

// import Login from '~/screens/Login';
// import Home from '~/screens/Home';
import Graphs from '~/screens/Graphs';

import light from '~/styles/themes/light';

const AgroMeasureApp: React.FC = () => {
	return (
		<ThemeProvider theme={light}>
			{/* <Login /> */}
			{/* <Home /> */}
			<Graphs />
		</ThemeProvider>
	);
};

export default AgroMeasureApp;
