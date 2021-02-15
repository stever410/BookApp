import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  carouselHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  detailButton: {
    backgroundColor: 'transparent',
  },
  carouselContainer: {
    marginTop: 10,
  },
  header: {
    fontFamily: FONTS.sfDisplayBold,
    fontSize: 18,
    color: COLORS.darkBlue,
  },
  description: {
    fontFamily: FONTS.sfDisplayMedium,
    fontSize: 13,
    color: COLORS.gray,
  },
});

export default styles;
