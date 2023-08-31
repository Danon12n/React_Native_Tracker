import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomLineChart from './CustomLineChart';

export default function WeightTracker({ chartData }) {
  return (
    <View style={styles.chartContainer}>
      <CustomLineChart data={chartData} />
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    display: 'flex',
  },
});
