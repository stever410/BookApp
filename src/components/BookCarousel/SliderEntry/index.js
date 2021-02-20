import React from 'react';
import {Pressable} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './index.styles';

const SliderEntry = (props) => {
  const {data, parallaxProps, handlePress} = props;
  const {title, subtitle, illustration} = data;
  return (
    <Pressable onPress={handlePress}>
      <ParallaxImage
        source={{uri: illustration}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </Pressable>
  );
};

export default SliderEntry;
