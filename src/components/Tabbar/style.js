import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

const style = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 50,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default style;
