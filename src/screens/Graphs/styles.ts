import styled from 'styled-components/native';
import { StatusBar, Dimensions } from 'react-native';

export const Wrapper = styled.View`
	background-color: ${({ theme }) => theme.background.secondary};
	flex-grow: 1;
`;

const { height } = Dimensions.get('window');

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 24,
		paddingVertical: 14,
	},
})`
	height: ${height - 48 - (StatusBar.currentHeight || 0)}px;
`;

export const ContentContainer = styled.View`
	width: 100%;
`;

export const Labels = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
`;

export const Label = styled.Text`
	color: ${({ theme }) => theme.text.secondary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 12px;
	padding: 8px 0px;
`;
