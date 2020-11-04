import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from '~/screens/Login';
import Home from '~/screens/Home';
import Graphs from '~/screens/Graphs';

const Tab = createBottomTabNavigator();
function AppRoutes() {
	const { colors, text, background, font } = useContext(ThemeContext);

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeBackgroundColor: colors.primary,
				inactiveBackgroundColor: colors.primary,
				activeTintColor: 'rgba(255, 255, 255, .375)',
				inactiveTintColor: 'rgba(255, 255, 255, .375)',
				showLabel: false,
			}}
			sceneContainerStyle={{
				backgroundColor: background.secondary,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <Icon size={size} color={color} name={'home'} />;
					},
				}}
			/>
			<Tab.Screen
				name="Graphs"
				component={Graphs}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return (
							<Icon size={size} color={color} name={'format-list-bulleted'} />
						);
					},
				}}
			/>

			<Tab.Screen
				name="Home-substituir-por-futuras"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <Icon size={size} color={color} name={'account'} />;
					},
				}}
			/>
			<Tab.Screen
				name="Home-substituir-futuras-telas"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <Icon size={size} color={color} name={'cog'} />;
					},
				}}
			/>
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" headerMode="none">
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="App" component={AppRoutes} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Routes;
