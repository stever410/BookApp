import {StyleSheet} from 'react-native';
import COLORS from '../../../configs/colors';
import {ITEM_WIDTH} from '../constants';

const styles = StyleSheet.create({
  imageContainer: {
    width: ITEM_WIDTH,
    height: 150,
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 4,
  },
});

export default styles;
