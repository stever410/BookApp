import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Dimensions} from 'react-native';
import SliderEntry from '../SliderEntry';
import {Text} from 'react-native-elements';
import styles from './index.styles';
import {ITEM_HEIGHT, ITEM_WIDTH, SLIDER_WIDTH} from './constants';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const BookCarousel = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return <SliderEntry data={item} parallaxProps={parallaxProps} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recommended</Text>
      <Text style={styles.subheader}>
        Books based on your previous interests
      </Text>
      <Carousel
        activeSlideAlignment="start"
        containerCustomStyle={styles.carouselContainer}
        ref={carouselRef}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages
      />
    </View>
  );
};

export default BookCarousel;
