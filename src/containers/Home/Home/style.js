import { StyleSheet } from 'react-native';
import { colors } from '../../../themes';
import * as d from '../../../utilities/Tranform';

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  top: {
    borderRadius: 10,
    width: '98%',
    marginLeft: '1%',
    height: 180 * d.ratioH,
  },
  postContainer: {
    marginTop: 9,
    borderRadius: 10,
    marginHorizontal: 3,
    overflow: 'hidden',
  },
  bottomPost: {
    width: '100%',
    height: 32,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 14,
    marginHorizontal: 4 * d.ratioW,
  },
  postTxt: {
    color: colors.black,
    fontSize: 10,
    paddingHorizontal: 4 * d.ratioW,
  },
  btnPost: {
    flexDirection: 'row',
    paddingHorizontal: 8 * d.ratioW,
  },
});

export default style;
