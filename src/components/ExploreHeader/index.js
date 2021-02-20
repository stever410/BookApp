import React from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import SearchInput from '../SearchInput';
import styles from './index.styles';
import COLORS from '../../configs/colors';

const ExploreHeader = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <Button
        type="clear"
        icon={
          <Icon
            name="notifications-outline"
            type="ionicon"
            size={20}
            color={COLORS.darkBlue}
          />
        }
      />
    </View>
  );
};

export default ExploreHeader;
