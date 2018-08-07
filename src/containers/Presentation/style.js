import { StyleSheet } from 'react-native';
import * as d from '../../utilities/Tranform';
import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2E43',
  },
  vItem: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
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
    width: '100%',
    height: 520 * d.ratioH,
    padding: 0,
  },
  item1: {
    backgroundColor: '#665EFF',
  },
  txtItem1: {
    textAlign: 'center',
    color: colors.placeholderColorWhite,
    lineHeight: 20 * d.ratioH,
    marginTop: 12 * d.ratioH,
  },
  item1Image: {
    width: 149 * d.ratioW,
    height: 190 * d.ratioH,
    marginTop: 70 * d.ratioH,
  },
  item1Title: {
    fontSize: 39,
    color: colors.white,
    fontWeight: '600',
    marginTop: 30.5 * d.ratioH,
    paddingTop: 0,
    lineHeight: 40,
  },
  item2: {
    backgroundColor: '#2AB9B9',
  },
  txtItem2: {
    textAlign: 'center',
    color: '#2A2E43',
    opacity: 0.7,
    lineHeight: 20 * d.ratioH,
    marginTop: 12 * d.ratioH,
  },
  item2Title: {
    fontSize: 25,
    textAlign: 'center',
    color: colors.white,
    fontWeight: '600',
    marginTop: 56 * d.ratioH,
    paddingTop: 0,
    lineHeight: 29 * d.ratioH,
  },
  item2Image: {
    width: 253 * d.ratioW,
    height: 146 * d.ratioH,
    marginTop: 95.5 * d.ratioH,
  },
  item3: {
    backgroundColor: '#FF9057',
  },
  item3Title: {
    color: '#2A2E43',
    marginTop: 39 * d.ratioH,
  },
  item3Image: {
    width: 155 * d.ratioW,
    height: 180 * d.ratioH,
    marginTop: 81 * d.ratioH,
  },
  item4: {
    backgroundColor: '#5773FF',
  },
  item4Image: {
    width: 207 * d.ratioW,
    height: 183 * d.ratioH,
    marginTop: 99 * d.ratioH,
  },
  item4Title: {
    marginTop: 18 * d.ratioH,
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
    marginHorizontal: 4 * d.ratioW,
  },
  vBottom: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
