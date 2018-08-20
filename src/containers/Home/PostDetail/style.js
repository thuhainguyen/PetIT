import { StyleSheet } from 'react-native';
import {} from '../../../themes';
import { ratioH, ratioW } from '../../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  header: {
    height: 73 * ratioH,
    width: 360 * ratioW,
    elevation: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  vTitle: {
    marginTop: 30 * ratioH,
    width: '100%',
    paddingHorizontal: 10 * ratioW,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default style;
