import React, { useState, useCallback, useContext } from 'react';
import { TouchableOpacity, TextInputProps, StyleSheet } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, InputComponent } from './styles';

interface IIcon {
	color: string;
	name: string;
	size?: number;
}

interface Props extends TextInputProps {
	icon?: IIcon;
}

const Input: React.FC<Props> = ({ icon, secureTextEntry, ...rest }) => {
	const [hidden, setHidden] = useState(secureTextEntry);
	const toggle = useCallback(() => setHidden((prev) => !prev), []);

	const { text } = useContext(ThemeContext);

	return (
		<Container style={styles.shadow}>
			<InputComponent
				{...rest}
				secureTextEntry={hidden}
				underlineColorAndroid="transparent"
			/>

			{secureTextEntry && (
				<TouchableOpacity onPress={toggle} style={styles.icon}>
					<Icon
						size={24}
						color={text.secondary}
						name={hidden ? 'eye-outline' : 'eye-off-outline'}
					/>
				</TouchableOpacity>
			)}

			{icon && (
				<Icon
					size={icon.size || 24}
					color={icon.color}
					name={icon.name}
					style={styles.icon}
				/>
			)}
		</Container>
	);
};

const styles = StyleSheet.create({
	icon: {
		marginLeft: 8,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
});

export default Input;
