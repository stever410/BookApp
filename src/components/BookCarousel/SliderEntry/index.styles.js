import {StyleSheet} from 'react-native';
import {ITEM_WIDTH} from '../constants';

const styles = StyleSheet.create({
  imageContainer: {
    width: ITEM_WIDTH,
    height: 150,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default styles;
