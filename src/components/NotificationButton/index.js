import React from 'react';
import {Button, Icon} from 'react-native-elements';
import styles from './index.styles';

const NotificationButton = () => {
  return (
    <Button
      buttonStyle={styles.notificationButton}
      icon={<Icon name="notifications-outline" type="ionicon" size={20} />}
    />
  );
};

export default NotificationButton;
