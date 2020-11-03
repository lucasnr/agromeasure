import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	border-color: rgba(0, 0, 0, 0.1);
	border-bottom-width: 1px;
	border-style: solid;
	flex-direction: row;
	height: 48px;
	justify-content: space-between;
	padding: 0px 32px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-size: 21px;
	font-family: ${({ theme }) => theme.font.primary.medium};
	text-transform: uppercase;
`;

export const Strong = styled.Text`
	color: ${({ theme }) => theme.colors.alternative};
	font-family: ${({ theme }) => theme.font.primary.bold};
`;
