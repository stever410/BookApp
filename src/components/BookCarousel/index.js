import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import SliderEntry from './SliderEntry';
import styles from './index.styles';
import {ITEM_WIDTH, SLIDER_WIDTH} from './constants';

const BookCarousel = (props) => {
  const [books, setBooks] = useState([]);
  const {item, navigation} = props;
  const carouselRef = useRef(null);

  useEffect(() => {
    setBooks(item.books);
  }, [item.books]);

  const renderItem = (book, parallaxProps) => {
    const {item} = book;
    const handlePress = () => {
      navigation.push('Detail', {item});
    };
    return (
      <SliderEntry
        data={item}
        parallaxProps={parallaxProps}
        handlePress={handlePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselHeader}>
        <View>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Button
          type="clear"
          buttonStyle={styles.detailButton}
          icon={<Icon type="ionicon" name="arrow-forward-outline" size={20} />}
        />
      </View>
      <Carousel
        activeSlideAlignment="start"
        containerCustomStyle={styles.carouselContainer}
        ref={carouselRef}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        data={books}
        renderItem={renderItem}
        hasParallaxImages
      />
    </View>
  );
};

export default BookCarousel;
