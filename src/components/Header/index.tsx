import React, { useContext } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Title, Strong } from './styles';

const Header: React.FC = () => {
	const { colors, background } = useContext(ThemeContext);

	return (
		<Container>
			<StatusBar
				translucent={false}
				backgroundColor={background.secondary}
				barStyle="dark-content"
			/>

			<TouchableOpacity>
				<Icon name="exit-to-app" size={24} color={colors.primary} />
			</TouchableOpacity>

			<Title>
				Agro
				<Strong>Measure</Strong>
			</Title>

			<TouchableOpacity>
				<Icon name="account-circle" size={24} color={colors.primary} />
			</TouchableOpacity>
		</Container>
	);
};

export default Header;
