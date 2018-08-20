import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { ratioH, ratioW } from '../../../utilities/Tranform';

const style = StyleSheet.create({
  header: {
    height: 50 * ratioH,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    elevation: 10,
  },
  petCard: {
    width: '98%',
    marginLeft: '1%',
    height: 150 * ratioH,
    marginBottom: 3 * ratioH,
    borderRadius: 10 * ratioH,
    overflow: 'hidden',
  },
  top: {
    marginTop: 5 * ratioH,
  },
  vTitle: {
    width: 360 * ratioW,
    height: 28 * ratioH,
    marginBottom: 10 * ratioH,
    justifyContent: 'center',
  },
  view: {
    width: '100%',
    marginBottom: 5 * ratioH,
  },
  title: {
    color: colors.white,
    fontSize: 17,
    paddingLeft: 10 * ratioW,
    letterSpacing: 1,
    fontWeight: '600',
    textShadowColor: colors.textShadow,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default style;
