import React, { useContext } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
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

	return (
		<Wrapper keyboardShouldPersistTaps="always">
			<StatusBar
				translucent={true}
				backgroundColor="transparent"
				barStyle="light-content"
			/>

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

				<Button activeOpacity={0.7}>
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
