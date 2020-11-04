import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';

const Chart: React.FC = () => {
	const data1 = [25, 28, 22, 23, 24, 14, 4, 14.5, 25, 30, 24, 18, 19];
	const data2 = [15, 18, 14, 15, 14, 8, 8, 10, 20, 20, 12, 10, 13];

	const data = [
		{
			data: data1,
			svg: {
				stroke: '#F4E58D',
				strokeWidth: 4,
			},
		},
		{
			data: data2,
			svg: {
				stroke: '#5FD187',
				strokeWidth: 4,
			},
		},
	];

	return (
		<View style={styles.container}>
			<LineChart
				style={styles.chart}
				data={data}
				contentInset={{ top: 20, bottom: 20 }}
				numberOfTicks={3}
			>
				<Grid />
			</LineChart>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { width: '100%' },
	chart: { height: 160, paddingHorizontal: 12 },
});

export default Chart;
