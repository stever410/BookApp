import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainer: {
    backgroundColor: COLORS.WHITE,
  },
  searchIcon: {
    marginLeft: 6,
  },
  input: {
    fontFamily: FONTS.sfText,
    fontSize: 16,
  },
});

export default styles;
