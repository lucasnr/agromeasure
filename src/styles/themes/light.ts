import { DefaultTheme } from 'styled-components';
import { FontFamily } from '../styled';

const font: {
	primary: FontFamily;
	secondary: FontFamily;
} = {
	primary: {
		regular: 'Montserrat Regular',
		medium: 'Montserrat Medium',
		semiBold: 'Montserrat SemiBold',
		bold: 'Montserrat Bold',
		extraBold: 'Montserrat ExtraBold',
		black: 'Montserrat Black',
	},
	secondary: {
		regular: 'IBM Plex Sans Regular',
		medium: 'IBM Plex Sans Medium',
		semiBold: 'IBM Plex Sans SemiBold',
		bold: 'IBM Plex Sans Bold',
		extraBold: 'IBM Plex Sans Bold',
		black: 'IBM Plex Sans Bold',
	},
};

const theme: DefaultTheme = {
	title: 'light',
	background: {
		primary: '#ffffff',
		secondary: '#F4F5FA',
	},
	text: {
		primary: '#1A1A1A',
		secondary: '#ADADAD',
	},
	colors: {
		primary: '#0BA14A',
		secondary: '#236690',
		alternative: '#E8D561',
		danger: '#DC3545',
		success: '#53a653',
	},
	font,
};

export default theme;
