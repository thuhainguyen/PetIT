import { Dimensions, Platform } from 'react-native';
import { isIphoneX } from './device';

const base = {
  width: 360,
  height: 640,
};
const iOSStatusBarHeight = isIphoneX() === true ? 44 : 20;
const statusBarHeight = Platform.OS === 'ios' ? iOSStatusBarHeight : 22;
const navBarHeight =
  Platform.OS === 'ios' ? 44 + statusBarHeight : 35 + statusBarHeight;
const { width, height } = Dimensions.get('window');
const ratioH = height / base.height;
const ratioW = width / base.width;

const horizontalScale = (size: number, factor: number = 1): number =>
  size + ((width / base.width) * size - size) * factor; // eslint-disable-line
const verticalScale = (size: number, factor: number = 1): number =>
  size + ((height / base.height) * size - size) * factor; // eslint-disable-line

export {
  statusBarHeight,
  navBarHeight,
  ratioH,
  ratioW,
  horizontalScale,
  verticalScale,
};
