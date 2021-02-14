import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import Header from './src/containers/Header';
import Homepage from './src/containers/Homepage';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Divider />
      <Homepage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;
