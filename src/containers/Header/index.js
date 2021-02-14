import React from 'react';
import {View} from 'react-native';
import NotificationButton from '../../components/NotificationButton';
import SearchInput from '../../components/SearchInput';
import styles from './index.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <NotificationButton />
    </View>
  );
};

export default Header;
