import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './index.styles';

const NotificationButton = () => {
  return (
    <View>
      <Icon
        style={styles.notificationButton}
        name="notifications-none"
        size={28}
      />
    </View>
  );
};

export default NotificationButton;
