import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './index.styles';

const NotificationButton = () => {
  return (
    <Button
      buttonStyle={styles.notificationButton}
      icon={
        <Icon
          name="notifications-none"
          size={20}
          style={styles.notificationIcon}
        />
      }
    />
  );
};

export default NotificationButton;
