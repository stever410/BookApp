import React from 'react';
import {Text, View} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './index.styles';

const SliderEntry = (props) => {
  const {data, parallaxProps} = props;
  const {title, subtitle, illustration} = data;
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{uri: illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  );
};

export default SliderEntry;
