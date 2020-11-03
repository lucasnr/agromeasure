import React from 'react';
import { StyleSheet } from 'react-native';

import {
	Container,
	SectionHeader,
	SectionTitle,
	SectionContent,
	SectionItems,
	SectionValue,
	SectionItem,
	SectionItemText,
	SectionItemStatus,
} from './styles';

const Section: React.FC = ({ children }) => {
	return <Container style={styles.shadow}>{children}</Container>;
};

const styles = StyleSheet.create({
	cameraHeader: { justifyContent: 'space-between' },
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},
});

export default Section;

export {
	SectionHeader,
	SectionTitle,
	SectionContent,
	SectionValue,
	SectionItems,
	SectionItem,
	SectionItemText,
	SectionItemStatus,
};
