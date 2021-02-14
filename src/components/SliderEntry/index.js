import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './index.styles';

const SliderEntry = (props) => {
  const {data} = props;
  const {title, subtitle, illustration} = data;
  return (
    <View>
      <ParallaxImage
        source={{uri: illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        showSpinner
      />
      <Text numberOfLines={2}>{title}</Text>
    </View>
  );
};

export default SliderEntry;
