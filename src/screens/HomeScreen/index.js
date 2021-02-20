import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreScreen from './ExploreScreen';
import BookDetailScreen from './BookDetailScreen';

const Stack = createStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Detail" component={BookDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
