import React, { useCallback, useContext } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components/native';

import Input from '~/components/Input';
import {
	Wrapper,
	Container,
	Header,
	Logo,
	Title,
	ForgotPassword,
	Button,
	ButtonText,
	FirstTime,
	SignUp,
} from './styles';

const Login: React.FC = () => {
	const { colors } = useContext(ThemeContext);

	const navigation = useNavigation();
	const onPress = useCallback(() => {
		navigation.reset({
			index: 0,
			routes: [{ name: 'App' }],
		});
	}, [navigation]);

	useFocusEffect(
		useCallback(() => {
			StatusBar.setBarStyle('light-content');
		}, [])
	);

	return (
		<Wrapper keyboardShouldPersistTaps="always">
			<Header />

			<Container>
				<Logo />
				<Title>Seja bem-vindo(a)</Title>

				<Input
					defaultValue="mauricio@divelement.io"
					icon={{
						name: 'check-circle',
						color: colors.primary,
					}}
				/>
				<Input defaultValue="senha.123456" secureTextEntry={true} />

				<TouchableOpacity activeOpacity={0.7}>
					<ForgotPassword>Esqueci minha senha</ForgotPassword>
				</TouchableOpacity>

				<Button onPress={onPress} activeOpacity={0.7}>
					<ButtonText>Login</ButtonText>
				</Button>

				<FirstTime>Primeira vez?</FirstTime>
				<TouchableOpacity activeOpacity={0.7}>
					<SignUp>Faça o cadastro aqui!</SignUp>
				</TouchableOpacity>
			</Container>
		</Wrapper>
	);
};

export default Login;
