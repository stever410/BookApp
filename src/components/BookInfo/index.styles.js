import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';
import {WINDOW_WIDTH} from '../../constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: WINDOW_WIDTH,
    marginVertical: 20,
  },
  iconContainer: {
    paddingRight: 3,
  },
  title: {
    textTransform: 'capitalize',
    fontFamily: FONTS.sfDisplay,
    color: COLORS.DARK_GRAY,
    fontSize: 10,
    textAlign: 'center',
  },
  value: {
    marginTop: 5,
    fontFamily: FONTS.sfDisplayMedium,
    textAlign: 'center',
    color: COLORS.DARK_BLUE,
    fontSize: 14,
  },
});

export default styles;
