import { StyleSheet } from 'react-native';
import { colors } from '../../themes';
import * as d from '../../utilities/Tranform';

const style = StyleSheet.create({
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
