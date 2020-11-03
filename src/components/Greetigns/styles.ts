import styled from 'styled-components/native';

import logo from '~/assets/img/LogoAlt.png';

export const Container = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 12px;
`;

export const Logo = styled.Image.attrs({
	source: logo,
})`
	height: 96px;
	width: 107px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 30px;
	margin-left: 14px;
`;
