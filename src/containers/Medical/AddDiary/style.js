import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import { verticalScale, horizontalScale } from '../../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: horizontalScale(20, 1.2),
    color: colors.defaultOpacity,
    marginBottom: verticalScale(17),
    fontWeight: '600',
  },
  form: {
    width: '86%',
  },
  btnInput: {
    borderRadius: 5,
    width: '100%',
    height: 36,
    borderColor: '#ababab',
    borderWidth: 1,
    padding: 0,
    paddingLeft: horizontalScale(20),
    marginBottom: verticalScale(5),
    justifyContent: 'center',
  },
  formItem: {
    width: '100%',
  },
  placeHolder: {
    color: colors.defaultOpacity,
    fontStyle: 'italic',
    opacity: 0.6,
  },
  imageAdd: {
    height: 41,
    width: 40,
    borderRadius: 20.5,
  },
  bottom: {
    marginTop: verticalScale(50),
    width: '100%',
  },
  btnBottom: {
    width: '100%',
    height: verticalScale(36),
    borderRadius: verticalScale(18, 0.5),
    backgroundColor: colors.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: colors.white,
  },
});

export default style;
