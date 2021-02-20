import React from 'react';
import {View} from 'react-native';
import {Image, Text} from 'react-native-elements';
import BookDetailHeader from '../../../components/BookDetailHeader';
import styles from './index.styles';
import globalStyles from '../../../index.styles';

const BookDetailScreen = (props) => {
  const {navigation, route} = props;
  const {item} = route.params;
  const {title, subtitle, illustration} = item;
  return (
    <View styles={styles.container}>
      <BookDetailHeader navigation={navigation} />
      <View style={styles.imageContainer}>
        <Image
          source={{uri: illustration}}
          containerStyle={[globalStyles.shadowSm, styles.image]}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>by Emily Robbins</Text>
      </View>
    </View>
  );
};

export default BookDetailScreen;
