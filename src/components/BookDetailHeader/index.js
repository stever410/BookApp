import React from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import styles from './index.styles';

const BookDetailHeader = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Button
        type="clear"
        title="Back"
        titleStyle={styles.title}
        icon={<Icon type="ionicon" name="chevron-back-outline" size={20} />}
        onPress={() => navigation.goBack()}
      />
      <Button
        type="clear"
        icon={<Icon type="ionicon" name="bookmark-outline" size={20} />}
      />
    </View>
  );
};

export default BookDetailHeader;
