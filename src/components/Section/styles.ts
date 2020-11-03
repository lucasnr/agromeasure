import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.background.primary};
	border-radius: 8px;
	margin-bottom: 20px;
	width: 100%;
`;

export const SectionHeader = styled.View`
	align-items: center;
	border-bottom-width: 1px;
	border-color: ${({ theme }) => theme.background.secondary};
	border-style: solid;
	flex-direction: row;
	justify-content: center;
	padding: 12px 20px;
`;

export const SectionTitle = styled.Text`
	color: ${({ theme }) => theme.colors.secondary};
	font-family: ${({ theme }) => theme.font.primary.medium};
	font-size: 18px;
	text-align: center;
`;

export const SectionContent = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: center;
	padding: 12px 20px;
	padding-top: 8px;
`;

export const SectionValue = styled.Text`
	color: ${({ theme }) => theme.colors.secondary};
	font-family: ${({ theme }) => theme.font.primary.bold};
	font-size: 48px;
	margin-right: 12px;
	margin-top: -8px;
`;

export const SectionItems = styled.View`
	width: 100%;
`;

export const SectionItem = styled.View`
	align-items: center;
	flex-direction: row;
	padding: 10px 0px;
	justify-content: space-between;
`;

export const SectionItemText = styled.Text`
	color: ${({ theme }) => theme.text.primary};
	font-family: ${({ theme }) => theme.font.secondary.regular};
	font-size: 16px;
	margin-top: -4px;
`;

export const SectionItemStatus = styled(LinearGradient)`
	border-radius: 36px;
	height: 18px;
	width: 18px;
`;
