import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { ratioH } from '../../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: colors.default,
    borderTopLeftRadius: 36 * ratioH,
    borderTopRightRadius: 36 * ratioH,
    height: 36 * ratioH,
    width: '100%',
    marginTop: 10 * ratioH,
    flexDirection: 'row',
    paddingHorizontal: '1%',
  },
  txtTitle: {
    color: colors.white,
    flex: 1,
    textAlign: 'center',
    lineHeight: 36 * ratioH,
    borderRightColor: colors.white,
    borderRightWidth: 1,
  },
  scrollFooter: {
    width: '98%',
    height: 120 * ratioH,
    paddingTop: 5 * ratioH,
    marginLeft: '1%',
    borderRadius: 7 * ratioH,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30 * ratioH,
  },
  footerTxt: {
    color: colors.default,
    lineHeight: 30 * ratioH,
    fontWeight: '600',
    textAlign: 'center',
  },
  imageAdd: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  scroll: {
    flex: 1,
    marginTop: 10 * ratioH,
    marginBottom: 50 * ratioH,
  },
});

export default style;
