import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '~/components/Header';
import Greetings from '~/components/Greetigns';
import Section, {
	SectionContent,
	SectionHeader,
	SectionTitle,
} from '~/components/Section';

import HumidityChart from './HumidityChart';
import { Wrapper, Container } from './styles';

const Home: React.FC = () => {
	return (
		<Wrapper>
			<Header />

			<Container>
				<Greetings />

				<Section>
					<SectionHeader>
						<SectionTitle style={styles.title}>Umidade</SectionTitle>
					</SectionHeader>
					<SectionContent>
						<HumidityChart />
					</SectionContent>
				</Section>

				<Section>
					<SectionHeader>
						<SectionTitle style={styles.title}>Temperatura</SectionTitle>
					</SectionHeader>
					<SectionContent>{/* Graph */}</SectionContent>
				</Section>
			</Container>
		</Wrapper>
	);
};

const styles = StyleSheet.create({
	title: {
		marginRight: 'auto',
	},
});

export default Home;
