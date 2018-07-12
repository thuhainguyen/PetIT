import { StyleSheet } from 'react-native';
import Colors from '../../themes/Colors';

const signup = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  searchContainer: {
    backgroundColor: Colors.white,
    width: '80%',
    height: 36,
    borderRadius: 18,
    position: 'absolute',
    top: 25,
    right: '10%',
  },
  viewCard: {
    width: '100%',
    position: 'absolute',
    bottom: 53,
    height: 200,
  },
});

export default signup;
