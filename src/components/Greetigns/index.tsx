import React from 'react';

import { Container, Logo, Title } from './styles';

const Greetigns: React.FC = () => {
	return (
		<Container>
			<Logo />
			<Title>Seja{'\n'}Bem-vindo!</Title>
		</Container>
	);
};

export default Greetigns;
