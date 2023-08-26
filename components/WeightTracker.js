import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomLineChart from './CustomLineChart';

export default function WeightTracker() {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.ChartTitle}>WeightTracker</Text>
      <CustomLineChart />
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    display: 'flex',
  },
  chartTitle: {
    color: 'white',
    fontSize: 20,
  },
});
