import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  carouselContainer: {
    marginTop: 10,
  },
  header: {
    fontFamily: FONTS.avenirBold,
    fontSize: 18,
    color: COLORS.darkBlue,
  },
  subheader: {
    fontFamily: FONTS.avenirDemi,
    fontSize: 13,
    color: COLORS.lightGray,
  },
});

export default styles;
