import React from 'react';
import {FlatList, View} from 'react-native';
import {Divider} from 'react-native-elements';
import BookCarousel from '../../../components/BookCarousel';
import ExploreHeader from '../../../components/ExploreHeader';
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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Recommended',
    description: 'Books based on your previous interests',
    books: ENTRIES1,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Editors choice',
    description: 'Some of the best books by our editors',
    books: ENTRIES1,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Good night sleep',
    description: 'Kid books',
    books: ENTRIES1,
  },
];

const ExploreScreen = (props) => (
  <View style={{backgroundColor: '#fff'}}>
    <ExploreHeader />
    <Divider />
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={(data) => <BookCarousel {...data} {...props} />}
    />
  </View>
);

export default ExploreScreen;
