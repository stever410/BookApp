import React from 'react';
import {useEffect, useState} from 'react';
import {BOTTOM_NAVIGATION_BUTTONS} from './constants';
import NavigationButton from './NavigationButton';

const useHooks = () => {
  const [buttons, setButtons] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const newButtons = [];
    BOTTOM_NAVIGATION_BUTTONS.forEach((item) => {
      newButtons.push({element: () => <NavigationButton {...item} />});
    });
    setButtons([...newButtons]);
  }, []);

  const handleButtonPress = (index) => {
    setSelectedIndex(index);
  };

  return {
    states: {
      buttons,
      selectedIndex,
    },
    handlers: {
      handleButtonPress,
    },
  };
};

export default useHooks;
