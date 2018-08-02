import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E43',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#665EFF',
    width: 104 * d.ratioW,
    height: 36 * d.ratioH,
    borderRadius: 18 * d.ratioH,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15 * d.ratioH,
  },
  scrollView: {
    marginTop: 50 * d.ratioH,
    width: '100%',
    height: 445 * d.ratioH,
  },
  vIndex: {
    width: '100%',
    height: 8 * d.ratioH,
    alignItems: 'center',
    marginTop: 25 * d.ratioH,
  },
  indexItem: {
    width: 8 * d.ratioW,
    height: 8 * d.ratioH,
    borderRadius: 4 * d.ratioH,
    marginHorizontal: 4 * d.ratioW,
  },
});
