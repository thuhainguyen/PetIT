import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

const style = StyleSheet.create({
  container: {
    height: 72,
    width: '98%',
    borderRadius: 15,
    flexDirection: 'row',
    marginLeft: '1%',
    backgroundColor: Colors.default,
    marginBottom: 3,
  },
  iconView: {
    width: 110,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 51,
    height: 48,
  },
  text: {
    color: Colors.white,
    fontWeight: '300',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default style;
