import { StyleSheet } from 'react-native';
import * as d from '../../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: d.verticalScale(134),
    height: d.verticalScale(166),
  },
});

export default style;
