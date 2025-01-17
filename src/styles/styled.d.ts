import 'styled-components';

export interface FontFamily {
	regular: string;
	medium: string;
	semiBold: string;
	bold: string;
	extraBold: string;
	black: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		background: {
			primary: string;
			secondary: string;
		};
		text: {
			primary: string;
			secondary: string;
		};
		colors: {
			primary: string;
			secondary: string;
			alternative: string;
			danger: string;
			success: string;
		};
		font: {
			primary: FontFamily;
			secondary: FontFamily;
		};
	}
}
