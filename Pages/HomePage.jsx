import { StyleSheet, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import WeightTracker from '../components/WeightTracker';
import Button from '../components/Button';
import storage from '../utils/storage';

const storageIdentifier = { key: 'weights', id: '0001' };

export default function HomePage() {
  const [x, setX] = useState('1');
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  });

  const addWeight = () => {
    storage
      .load(storageIdentifier)
      .then((data) => {
        alert('Вес добавлен');

        const newData = { ...data };

        newData.labels.push(new Date().toLocaleDateString());
        newData.values.push(+x);

        setChartData({ labels: [...newData.labels], datasets: [{ data: [...newData.values] }] });

        storage.save({
          ...storageIdentifier,
          data: { ...newData },
        });
      })
      .catch((err) => {
        console.log(err);

        setChartData({ labels: [new Date().toLocaleDateString()], datasets: [{ data: [+x] }] });

        storage.save({
          ...storageIdentifier,
          data: { labels: [new Date().toLocaleDateString()], values: [x] },
        });
      });
  };

  const showWeights = () => {
    storage.load(storageIdentifier).then((data) => {
      console.log(data);
    });
  };

  const clearWeights = () => {
    storage.clearMap();
  };

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <WeightTracker chartData={chartData} />
      <TextInput
        style={styles.input}
        value={x}
        onChangeText={setX}
        keyboardType='numeric'
        placeholder={'Введите вес'}
      />
      <Button label='Добавить вес' theme={'primary'} onPress={addWeight} />
      {/* <Button label='Показать вес' theme={'primary'} onPress={showWeights} /> */}
      {/* <Button label='Очистить вес' theme={'primary'} onPress={clearWeights} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
  },
  input: {
    width: '100%',
    fontSize: 26,
    color: 'white',
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
  },
});
