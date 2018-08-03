import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E43',
  },
  btn: {
    backgroundColor: '#665EFF',
    width: 104 * d.ratioW,
    height: 36 * d.ratioH,
    borderRadius: 18 * d.ratioH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 60 * d.ratioH,
    padding: 0,
  },
  item1: {
    backgroundColor: '#665EFF',
    marginLeft: 48 * d.ratioW,
  },
  item1Image: {
    width: 161 * d.ratioW,
    height: 176.5 * d.ratioH,
  },
  item2: {
    backgroundColor: '#2AB9B9',
    marginLeft: 21 * d.ratioW,
  },
  item3: {
    backgroundColor: '#FF9057',
    marginLeft: 21 * d.ratioW,
  },
  item4: {
    backgroundColor: '#5773FF',
    marginLeft: 21 * d.ratioW,
    marginRight: 48 * d.ratioW,
  },
  vIndex: {
    width: '100%',
    height: 8 * d.ratioH,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30 * d.ratioH,
    flexDirection: 'row',
  },
  indexItem: {
    width: 8 * d.ratioW,
    height: 8 * d.ratioH,
    borderRadius: 4 * d.ratioH,
    marginHorizontal: 4 * d.ratioW,
  },
  vBottom: {
    marginTop: 20 * d.ratioH,
    width: '100%',
    alignItems: 'center',
  },
});
