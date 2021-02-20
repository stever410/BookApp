import React from 'react';
import {View} from 'react-native';
import BookDetailHeader from '../../../components/BookDetailHeader';

const BookDetailScreen = (props) => {
  return (
    <View>
      <BookDetailHeader {...props} />
    </View>
  );
};

export default BookDetailScreen;
