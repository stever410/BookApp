import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  carouselHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  carouselContainer: {
    marginTop: 10,
  },
  header: {
    fontFamily: FONTS.sfDisplayBold,
    fontSize: 18,
    color: COLORS.DARK_BLUE,
  },
  description: {
    fontFamily: FONTS.sfDisplayMedium,
    fontSize: 13,
    color: COLORS.GRAY,
  },
});

export default styles;
