import {StyleSheet} from 'react-native';
import FONTS from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },
  inputContainer: {
    backgroundColor: '#fff',
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
