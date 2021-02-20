import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import BookScreen from './src/screens/BookScreen';
import UserScreen from './src/screens/UserScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {SCREEN_ICONS} from './src/constants';
import COLORS from './src/configs/colors';
import FONTS from './src/configs/fonts';

const Tab = createBottomTabNavigator();

const App = () => {
  const handleScreenOption = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      return (
        <Icon
          type="ionicon"
          name={SCREEN_ICONS[route.name]}
          size={24}
          color={focused ? COLORS.purple : COLORS.gray}
        />
      );
    },
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Explore"
          screenOptions={handleScreenOption}
          tabBarOptions={{
            activeTintColor: COLORS.purple,
            inactiveTintColor: COLORS.gray,
            labelStyle: {fontFamily: FONTS.sfDisplay, marginBottom: 2},
          }}>
          <Tab.Screen name="Explore" component={HomeScreen} />
          <Tab.Screen name="Books" component={BookScreen} />
          <Tab.Screen name="Saved" component={BookScreen} />
          <Tab.Screen name="Account" component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default App;
