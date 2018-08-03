import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';

export default StyleSheet.create({
  container: {
    width: 265 * d.ratioW,
    height: 445 * d.ratioH,
    borderRadius: 30 * d.ratioH,
    alignItems: 'center',
  },
  view1: {
    width: 210 * d.ratioW,
    height: 210 * d.ratioH,
    borderRadius: 61 * d.ratioH,
    marginTop: 60 * d.ratioH,
    marginLeft: 27 * d.ratioW,
    backgroundColor: 'rgba(255,255,255,0.05)',
    position: 'absolute',
    zIndex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: 174 * d.ratioW,
    height: 174 * d.ratioH,
    borderRadius: 61 * d.ratioH,
    backgroundColor: 'rgba(255,255,255,0.2)',
    position: 'absolute',
    zIndex: 1,
  },
  view3: {
    width: 120 * d.ratioW,
    height: 120 * d.ratioH,
    borderRadius: 60 * d.ratioH,
    backgroundColor: 'rgba(255,255,255,0.35)',
    position: 'absolute',
    zIndex: 2,
  },
});
