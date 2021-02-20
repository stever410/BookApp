import {StyleSheet} from 'react-native';
import COLORS from '../../configs/colors';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainer: {
    backgroundColor: 'transparent',
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
