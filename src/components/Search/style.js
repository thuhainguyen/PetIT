import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

const style = StyleSheet.create({
  container: {
    height: 32,
    width: '80%',
    position: 'absolute',
    top: 25,
    flexDirection: 'row',
    right: '10%',
    borderRadius: 16,
    backgroundColor: 'white',
  },
  iconView: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 18,
    height: 16,
    tintColor: Colors.textOpacity6,
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    textAlignVertical: 'center',
  },
});

export default style;
