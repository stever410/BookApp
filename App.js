import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import Header from './src/containers/Header';
import HomeScreen from './src/containers/HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomMenu from './src/components/BottomMenu';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header />
        <Divider />
        <HomeScreen />
        <BottomMenu />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default App;
