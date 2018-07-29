import { StyleSheet, Platform } from 'react-native';
import { colors } from '../themes';

export default StyleSheet.create({
  viewBGTabar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewPointBGsmall: {
    width: Platform.OS === 'ios' ? 56 : 32,
    height: Platform.OS === 'ios' ? 56 : 32,
    borderRadius: Platform.OS === 'ios' ? 30 : 16,
    backgroundColor: colors.default,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewPointBG: {
    width: Platform.OS === 'ios' ? 75 : 46,
    height: Platform.OS === 'ios' ? 75 : 46,
    borderRadius: Platform.OS === 'ios' ? 45 : 23,
    backgroundColor: colors.defaultOpacity,
    position: 'absolute',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
