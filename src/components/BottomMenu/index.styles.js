import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../configs/colors';

const styles = StyleSheet.create({
  buttonGroupContainer: {
    marginHorizontal: 0,
    marginBottom: 0,
    padding: 4,
  },
  buttonBorder: {
    borderWidth: 0,
  },
  innerBorder: {
    width: 0,
  },
  selectedButton: {
    borderRadius: 80,
    backgroundColor: COLORS.lightBlue,
  },
});

export default styles;
