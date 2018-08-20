import { StyleSheet } from 'react-native';
// import { colors } from '../../../themes';
import { ratioH, ratioW } from '../../../utilities/Tranform';
import { colors } from '../../../themes';

const style = StyleSheet.create({
  header: {
    height: 200 * ratioH,
    width: 360 * ratioW,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 7 * ratioW,
    elevation: 5,
  },
  avatarPet: {
    height: 150 * ratioH,
    width: 150 * ratioW,
    borderRadius: 10 * ratioH,
  },
  profilePet: {
    width: 196 * ratioW,
    height: 150 * ratioH,
    paddingLeft: 7 * ratioW,
    justifyContent: 'center',
  },
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
  funcView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  funcBtn: {
    width: 84 * ratioW,
    height: 40 * ratioH,
    overflow: 'hidden',
    borderRadius: 20 * ratioH,
  },
  title: {
    fontSize: 18,
    color: colors.default,
    width: '100%',
    lineHeight: 40 * ratioH,
    textAlign: 'center',
  },
  infoView: {
    width: '99%',
    marginLeft: '0.5%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 10 * ratioH,
    elevation: 5,
    flex: 1,
    marginBottom: 40 * ratioH,
  },
  scroll: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '1.5%',
  },
  item: {
    marginVertical: 1.5 * ratioH,
    width: '100%',
    height: 140 * ratioH,
    paddingTop: 5 * ratioH,
    paddingHorizontal: 7 * ratioW,
    flexDirection: 'row',
    borderRadius: 7,
    backgroundColor: colors.default,
  },
  leftItem: {
    flex: 1,
  },
  itemImage: {
    height: '100%',
    width: 130 * ratioH,
    borderRadius: 7,
  },
});

export default style;
