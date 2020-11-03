import React from 'react';
import { StyleSheet } from 'react-native';

import Header from '~/components/Header';

import {
	Wrapper,
	Container,
	Greetings,
	Logo,
	Title,
	Row,
	ColRight,
	ColLeft,
	Thermometer,
	Humidity,
	Curtains,
	Ventilation,
	Camera,
	Section,
	SectionHeader,
	SectionTitle,
	SectionContent,
	SectionValue,
	CameraImage,
	SectionItems,
	SectionItem,
	SectionItemText,
	SectionItemStatus,
} from './styles';

const successColors = ['#119d59', '#4fcf8a'];
const dangerColors = ['#ff3149', '#822930'];

const Home: React.FC = () => {
	return (
		<Wrapper>
			<Header />

			<Container>
				<Greetings>
					<Logo />
					<Title>Seja{'\n'}Bem-vindo!</Title>
				</Greetings>

				<Row>
					<ColLeft>
						<Section style={styles.shadow}>
							<SectionHeader>
								<SectionTitle>Temperatura</SectionTitle>
							</SectionHeader>
							<SectionContent>
								<SectionValue>24º</SectionValue>
								<Thermometer />
							</SectionContent>
						</Section>
					</ColLeft>

					<ColRight>
						<Section style={styles.shadow}>
							<SectionHeader>
								<SectionTitle>Umidade</SectionTitle>
							</SectionHeader>
							<SectionContent>
								<SectionValue>55%</SectionValue>
								<Humidity />
							</SectionContent>
						</Section>
					</ColRight>
				</Row>

				<Section style={styles.shadow}>
					<SectionHeader style={styles.cameraHeader}>
						<SectionTitle>Câmera</SectionTitle>
						<Camera />
					</SectionHeader>
					<SectionContent>
						<CameraImage />
					</SectionContent>
				</Section>

				<Row>
					<ColLeft>
						<Section style={styles.shadow}>
							<SectionHeader>
								<SectionTitle>Ventilação</SectionTitle>
								<Ventilation />
							</SectionHeader>
							<SectionContent>
								<SectionItems>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={successColors} />
									</SectionItem>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={successColors} />
									</SectionItem>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={dangerColors} />
									</SectionItem>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={dangerColors} />
									</SectionItem>
								</SectionItems>
							</SectionContent>
						</Section>
					</ColLeft>

					<ColRight>
						<Section style={styles.shadow}>
							<SectionHeader>
								<SectionTitle>Cortinas</SectionTitle>
								<Curtains />
							</SectionHeader>
							<SectionContent>
								<SectionItems>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={successColors} />
									</SectionItem>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={successColors} />
									</SectionItem>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={dangerColors} />
									</SectionItem>
									<SectionItem>
										<SectionItemText>Galpão AB</SectionItemText>
										<SectionItemStatus colors={dangerColors} />
									</SectionItem>
								</SectionItems>
							</SectionContent>
						</Section>
					</ColRight>
				</Row>
			</Container>
		</Wrapper>
	);
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

export default Home;
