import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

const signup = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: colors.white,
    width: '80%',
    height: 36,
    borderRadius: 18,
    position: 'absolute',
    top: 25,
    right: '10%',
    zIndex: 100,
    elevation: 5,
  },
  viewCard: {
    width: '100%',
    position: 'absolute',
    bottom: 53,
    height: 200,
  },
});

export default signup;
