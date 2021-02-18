import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import BookScreen from './src/screens/BookScreen';
import UserScreen from './src/screens/UserScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomMenu from './src/components/BottomMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {BOTTOM_NAVIGATION_BUTTONS} from './src/constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const handleScreenOption = ({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        return <Icon type="ionicon" name={route.name} size={24}/>
      },
    });
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Explore" component={HomeScreen} />
          <Tab.Screen name="Books" component={BookScreen} />
          <Tab.Screen name="Saved" component={BookScreen} />
          <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
