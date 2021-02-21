import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  title: {
    color: COLORS.DARK_BLUE,
    fontFamily: FONTS.sfDisplaySemibold,
    fontSize: 12,
  },
});

export default styles;
