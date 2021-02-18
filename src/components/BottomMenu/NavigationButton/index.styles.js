import {StyleSheet} from 'react-native';
import COLORS from '../../../configs/colors';
import FONTS from '../../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 11,
    fontFamily: FONTS.sfTextSemiBold,
    color: COLORS.purple,
    marginLeft: 6,
  },
  disabledTitle: {
    display: 'none',
  },
});

export default styles;
