import styled from 'styled-components/native';

import logo from '~/assets/img/LogoAlt.png';
import cameraImage from '~/assets/img/Camera.png';

import thermometer from '~/assets/img/icons/thermometer.png';
import humidity from '~/assets/img/icons/humidity.png';
import curtains from '~/assets/img/icons/curtains.png';
import ventilation from '~/assets/img/icons/ventilation.png';
import camera from '~/assets/img/icons/camera.png';

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

export const Greetings = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 12px;
`;

export const Logo = styled.Image.attrs({
	source: logo,
})`
	height: 96px;
	width: 107px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-family: ${({ theme }) => theme.font.primary.semiBold};
	font-size: 30px;
	margin-left: 14px;
`;

export const Row = styled.View`
	align-items: center;
	flex-direction: row;
	width: 100%;
`;

export const ColLeft = styled.View`
	padding-right: 12px;
	width: 50%;
`;

export const ColRight = styled.View`
	padding-left: 12px;
	width: 50%;
`;

export const Thermometer = styled.Image.attrs({
	source: thermometer,
})`
	height: 36px;
	width: 17px;
`;

export const Humidity = styled.Image.attrs({
	source: humidity,
})`
	height: 25px;
	width: 25px;
`;

export const Curtains = styled.Image.attrs({
	source: curtains,
})`
	height: 18px;
	margin-left: 10px;
	width: 18px;
`;

export const Ventilation = styled.Image.attrs({
	source: ventilation,
})`
	height: 19px;
	margin-left: 10px;
	width: 23px;
`;

export const Camera = styled.Image.attrs({
	source: camera,
})`
	height: 17px;
	margin-left: 10px;
	width: 21px;
`;

export const Section = styled.View`
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

import LinearGradient from 'react-native-linear-gradient';

export const SectionItemStatus = styled(LinearGradient)`
	border-radius: 36px;
	height: 18px;
	width: 18px;
`;

export const CameraImage = styled.Image.attrs({
	source: cameraImage,
})`
	border-radius: 8px;
	height: 98px;
	width: 100%;
`;
