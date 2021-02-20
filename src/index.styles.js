import {StyleSheet} from 'react-native';
import COLORS from './configs/colors';

const styles = StyleSheet.create({
  shadowSm: {
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default styles;
