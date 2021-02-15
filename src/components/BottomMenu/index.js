import React from 'react';
import {View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import useHooks from './hooks';
import styles from './index.styles';

const BottomMenu = () => {
  const {states, handlers} = useHooks();
  const {buttons, selectedIndex} = states;
  const {handleButtonPress} = handlers;
  return (
    <ButtonGroup
      selectedIndex={selectedIndex}
      containerStyle={styles.buttonGroupContainer}
      innerBorderStyle={styles.innerBorder}
      selectedButtonStyle={styles.selectedButton}
      buttons={buttons}
      onPress={handleButtonPress}
    />
  );
};

export default BottomMenu;
