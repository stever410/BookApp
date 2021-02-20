import React from 'react';
import COLORS from '../../configs/colors';
import {View} from 'react-native';
import {Divider, Icon, Text} from 'react-native-elements';
import styles from './index.styles';

const BookInfo = () => {
  const MOCK_DATA = {
    reads: 568,
    ratings: 4.6,
    reviews: 244,
  };
  return (
    <View style={styles.container}>
      {Object.entries(MOCK_DATA).map(([key, value], index) => (
        <View key={index}>
          <Text style={styles.title}>{key}</Text>
          <Text style={styles.value}>
            {key === 'ratings' && (
              <Icon
                type="ionicon"
                name="star"
                color={COLORS.ORANGE}
                size={11}
                containerStyle={styles.iconContainer}
              />
            )}
            {value}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default BookInfo;
