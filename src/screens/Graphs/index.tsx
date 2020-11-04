import React from 'react';
import { StyleSheet } from 'react-native';

import Header from '~/components/Header';
import Greetings from '~/components/Greetigns';
import Section, {
	SectionContent,
	SectionHeader,
	SectionTitle,
} from '~/components/Section';

import HumidityChart from './HumidityChart';
import TemperatureChart from './TemperatureChart';
import { Wrapper, Container, ContentContainer, Labels, Label } from './styles';

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
						<ContentContainer>
							<HumidityChart />

							<Labels>
								<Label>22º</Label>
								<Label>23º</Label>
								<Label>24º</Label>
								<Label>25º</Label>
								<Label>26º</Label>
								<Label>27º</Label>
								<Label>28º</Label>
							</Labels>
						</ContentContainer>
					</SectionContent>
				</Section>

				<Section>
					<SectionHeader>
						<SectionTitle style={styles.title}>Temperatura</SectionTitle>
					</SectionHeader>
					<SectionContent>
						<ContentContainer>
							<Labels>
								<Label>22º</Label>
								<Label>23º</Label>
								<Label>24º</Label>
								<Label>25º</Label>
								<Label>26º</Label>
								<Label>27º</Label>
								<Label>28º</Label>
							</Labels>

							<TemperatureChart />

							<Labels>
								<Label>Seg</Label>
								<Label>Ter</Label>
								<Label>Quar</Label>
								<Label>Quin</Label>
								<Label>Sex</Label>
								<Label>Sab</Label>
								<Label>Dom</Label>
							</Labels>
						</ContentContainer>
					</SectionContent>
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
