import React from 'react';
import {useEffect, useState} from 'react';
import {BOTTOM_NAVIGATION_BUTTONS} from './constants';
import NavigationButton from './NavigationButton';

const useHooks = () => {
  const [buttons, setButtons] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const newButtons = [];
    BOTTOM_NAVIGATION_BUTTONS.forEach((item, index) => {
      if (index === selectedIndex) {
        newButtons.push({element: () => <NavigationButton {...item} />});
      } else {
        newButtons.push({
          element: () => <NavigationButton {...item} isDisabled />,
        });
      }
    });
    setButtons([...newButtons]);
  }, [selectedIndex]);

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
