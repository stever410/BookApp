import {StyleSheet} from 'react-native';
import COLORS from '../../../configs/colors';
import FONTS from '../../../configs/fonts';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    height: WINDOW_HEIGHT,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  detailContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
  },
  image: {
    width: 120,
    height: 200,
    borderRadius: 4,
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
  button: {
    borderRadius: 100,
    backgroundColor: COLORS.PURPLE,
    width: WINDOW_WIDTH * 0.8,
    height: 40,
  },
  buttonTitle: {
    fontFamily: FONTS.sfDisplaySemibold,
    fontSize: 11,
    letterSpacing: 0.5,
  },
  overviewContainer: {
    marginHorizontal: 30,
  },
  maxHeight150: {
    maxHeight: 150,
  },
  overviewHeader: {
    fontFamily: FONTS.sfDisplayBold,
    fontSize: 15,
    textAlign: 'left',
    color: COLORS.DARK_BLUE,
    marginTop: 20,
    marginBottom: 5,
  },
  overviewText: {
    fontFamily: FONTS.sfTextMedium,
    fontSize: 11,
    color: COLORS.DARK_GRAY,
    lineHeight: 18,
    textAlign: 'justify',
    paddingRight: 15,
  },
});

export default styles;
