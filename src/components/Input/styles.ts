import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	background-color: ${({ theme }) => theme.background.primary};
	flex-direction: row;
	height: 54px;
	margin-bottom: 24px;
	padding: 0px 12px;
`;

export const InputComponent = styled.TextInput`
	color: ${({ theme }) => theme.text.primary};
	font-size: 16px;
	flex-shrink: 1;
	height: 54px;
	width: 100%;
`;
