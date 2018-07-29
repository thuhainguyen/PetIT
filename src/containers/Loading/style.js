import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 134 * d.ratioW,
    height: 158 * d.ratioH,
  },
});

export default style;
