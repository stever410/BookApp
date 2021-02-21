import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Divider, Image, Text} from 'react-native-elements';
import BookDetailHeader from '../../../components/BookDetailHeader';
import styles from './index.styles';
import globalStyles from '../../../index.styles';
import BookInfo from '../../../components/BookInfo';

const BookDetailScreen = (props) => {
  const {navigation, route} = props;
  const {item} = route.params;
  const {title, subtitle, illustration} = item;
  return (
    <View style={styles.container}>
      <BookDetailHeader navigation={navigation} />
      <View style={styles.detailContainer}>
        <Image
          source={{uri: illustration}}
          containerStyle={[globalStyles.shadowSm, styles.image]}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>by Emily Robbins</Text>
        <BookInfo />
      </View>
      <Divider />
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewHeader}>Overview</Text>
      </View>
      <ScrollView style={[styles.overviewContainer, styles.maxHeight150]}>
        <Text style={styles.overviewText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vero
          deserunt doloremque fuga magnam sit suscipit repudiandae qui, soluta
          ipsa nisi repellat ab illum ipsum ipsam exercitationem! Eos, commodi
          debitis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          vero deserunt doloremque fuga magnam sit suscipit repudiandae qui,
          soluta ipsa nisi repellat ab illum ipsum ipsam exercitationem! Eos,
          commodi debitis.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Earum vero deserunt doloremque fuga magnam sit suscipit
          repudiandae qui, soluta ipsa nisi repellat ab illum ipsum ipsam
          exercitationem! Eos, commodi debitis.
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="START READING"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

export default BookDetailScreen;
