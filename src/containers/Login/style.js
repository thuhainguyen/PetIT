import { StyleSheet } from 'react-native';
import { colors } from '../../themes';
import * as d from '../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  vTop: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLogin: {
    width: 173 * d.ratioW,
    height: 61 * d.ratioH,
  },
  vMid: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 260 * d.ratioW,
    height: 40 * d.ratioH,
    elevation: 6,
    backgroundColor: colors.white,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  txt: {
    fontSize: 15,
    color: colors.white,
    fontFamily: 'segoeuisl',
    fontWeight: '600',
  },
  vInput: {
    width: 260 * d.ratioW,
    height: 46 * d.ratioH,
    flexDirection: 'row',
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 23 * d.ratioH,
    marginBottom: 12 * d.ratioH,
  },
  vImage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 50 * d.ratioW,
  },
  image: {
    width: 24 * d.ratioW,
    height: 24 * d.ratioH,
  },
  input: {
    color: colors.white,
    height: '100%',
    width: 200 * d.ratioW,
    padding: 0,
    fontSize: 14,
  },
  vBottom: {
    alignItems: 'center',
    flex: 3.5,
    paddingTop: 20,
  },
  txtBottom: {
    fontSize: 10,
    color: colors.white,
    paddingTop: 10,
    paddingBottom: 15,
    opacity: 0.6,
  },
  vBottom1: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100 * d.ratioH,
    width: '100%',
  },
  vBottom2: {
    alignItems: 'center',
    height: 100 * d.ratioH,
    width: '100%',
    justifyContent: 'flex-end',
  },
});

export default style;
