import React from 'react';
import {View} from 'react-native';
import {Icon, Text} from 'react-native-elements';
import COLORS from '../../../configs/colors';
import styles from './index.styles';

const NavigationButton = (props) => {
  const {title, icon, isDisabled} = props;
  return (
    <View style={styles.container}>
      <Icon
        type="ionicon"
        name={icon}
        size={20}
        color={!isDisabled ? COLORS.purple : COLORS.gray}
      />
      {!isDisabled && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default NavigationButton;
