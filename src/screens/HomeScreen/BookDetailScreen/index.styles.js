import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../../configs/colors';
import FONTS from '../../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 4,
  },
  imageContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.sfDisplaySemibold,
    letterSpacing: 0.3,
    color: COLORS.DARK_BLUE,
    fontSize: 13,
    marginTop: 20,
  },
  author: {
    fontFamily: FONTS.sfDisplay,
    fontSize: 11,
    marginTop: 5,
    color: COLORS.GRAY,
  },
});

export default styles;
