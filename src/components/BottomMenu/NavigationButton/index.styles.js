import {StyleSheet} from 'react-native';
import COLORS from '../../../configs/colors';
import FONTS from '../../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: FONTS.sfTextSemiBold,
    color: COLORS.purple,
    marginLeft: 6,
  },
  disabledTitle: {
    display: 'none',
  },
});

export default styles;
