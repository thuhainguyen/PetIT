import { StyleSheet } from 'react-native';
import { ratioH } from '../../../../utilities/Tranform';

const style = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 2 * ratioH,
  },
  col: {
    flex: 1,
    justifyContent: 'center',
  },
  titleCol: {
    fontWeight: '600',
    color: 'rgba(0,0,0,0.9)',
  },
});

export default style;
