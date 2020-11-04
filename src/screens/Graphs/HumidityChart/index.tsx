import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-svg-charts';

const Chart: React.FC = () => {
	const data1 = [20, 15, 15, 8, 14, 24, 20].map((value) => ({ value }));
	const data2 = [10, 7.5, 7.5, 4, 12, 20, 15].map((value) => ({ value }));

	// const labels = ['22º', '22º', '22º', '22º', '22º', '22º', '22º'];

	const barData = [
		{
			data: data1,
			svg: {
				fill: '#F4E58D',
			},
		},
		{
			data: data2,
			svg: {
				fill: '#5FD187',
			},
		},
	];

	return (
		<View style={styles.container}>
			<BarChart
				style={styles.chart}
				data={barData}
				yAccessor={({ item }) => item.value}
				spacingInner={0.5}
				contentInset={{ top: 0, bottom: 30 }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { width: '100%' },
	chart: { height: 160, paddingHorizontal: 12 },
});

export default Chart;
