import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats Screen</Text>
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
