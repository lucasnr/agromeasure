import styled from 'styled-components/native';

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

export const CameraImage = styled.Image.attrs({
	source: cameraImage,
})`
	border-radius: 8px;
	height: 98px;
	width: 100%;
`;
