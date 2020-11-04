import React, { useContext, useCallback } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Title, Strong } from './styles';

const Header: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	useFocusEffect(
		useCallback(() => {
			StatusBar.setBarStyle('dark-content');
		}, [])
	);

	const navigation = useNavigation();
	const onExit = useCallback(() => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'Login' }],
		});
	}, [navigation]);

	return (
		<Container>
			<TouchableOpacity onPress={onExit}>
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
