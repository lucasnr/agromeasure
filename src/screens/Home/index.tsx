import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Header from '~/components/Header';
import Greetings from '~/components/Greetigns';
import Section, {
	SectionHeader,
	SectionTitle,
	SectionContent,
	SectionValue,
	SectionItems,
	SectionItem,
	SectionItemText,
	SectionItemStatus,
} from '~/components/Section';
import { Row, ColRight, ColLeft } from '~/components/Row';

import {
	Wrapper,
	Container,
	Thermometer,
	Humidity,
	Curtains,
	Ventilation,
	Camera,
	CameraImage,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const successColors = ['#119d59', '#4fcf8a'];
const dangerColors = ['#ff3149', '#822930'];

const Home: React.FC = () => {
	const navigation = useNavigation();
	const onPress = useCallback(() => {
		navigation.navigate('Graphs');
	}, [navigation]);

	return (
		<Wrapper>
			<Header />

			<Container>
				<Greetings />

				<Row>
					<ColLeft>
						<TouchableOpacity onPress={onPress} activeOpacity={1}>
							<Section>
								<SectionHeader>
									<SectionTitle>Temperatura</SectionTitle>
								</SectionHeader>
								<SectionContent>
									<SectionValue>24º</SectionValue>
									<Thermometer />
								</SectionContent>
							</Section>
						</TouchableOpacity>
					</ColLeft>

					<ColRight>
						<TouchableOpacity onPress={onPress} activeOpacity={1}>
							<Section>
								<SectionHeader>
									<SectionTitle>Umidade</SectionTitle>
								</SectionHeader>
								<SectionContent>
									<SectionValue>55%</SectionValue>
									<Humidity />
								</SectionContent>
							</Section>
						</TouchableOpacity>
					</ColRight>
				</Row>

				<Section>
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
						<Section>
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
						<Section>
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
});

export default Home;
