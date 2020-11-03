import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import logo from '~/assets/img/Logo.png';
import header from '~/assets/img/Header.png';

export const Wrapper = styled.ScrollView`
	background-color: ${({ theme }) => theme.background.secondary};
`;

const { width } = Dimensions.get('window');

export const Header = styled.Image.attrs({
	source: header,
})`
	height: ${width * 0.376508447}px;
	width: ${width}px;
`;

export const Container = styled.View`
	padding: 0px 36px;
`;

export const Logo = styled.Image.attrs({
	source: logo,
})`
	height: 162px;
	margin: 0px auto;
	margin-bottom: 38px;
	width: 248px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.regular};
	font-size: 21px;
	margin-bottom: 34px;
`;

export const ForgotPassword = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 12px;
	margin-bottom: 32px;
`;

export const Button = styled.TouchableOpacity`
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	height: 52px;
	justify-content: center;
	padding: 12px;
`;

export const ButtonText = styled.Text`
	color: ${({ theme }) => theme.background.primary};
	font-family: ${({ theme }) => theme.font.secondary.bold};
	font-size: 16px;
	text-transform: uppercase;
`;

export const FirstTime = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 12px;
	margin-top: 46px;
	text-align: center;
`;

export const SignUp = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.bold};
	font-size: 17px;
	margin-bottom: 16px;
	text-align: center;
`;
