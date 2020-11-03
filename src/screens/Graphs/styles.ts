import styled from 'styled-components/native';

export const Wrapper = styled.View`
	background-color: ${({ theme }) => theme.background.secondary};
	flex-grow: 1;
`;

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: 24,
		paddingBottom: 24,
		paddingTop: 14,
	},
})`
	flex-grow: 1;
`;
