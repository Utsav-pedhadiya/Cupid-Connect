import {StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ECF0F4',
    borderRadius: 12,
    padding: 16,
    width: 360,
    marginLeft: 16,
    marginTop: 16,
  },
  card2: {
    backgroundColor: '#CCF3FA',
  },
  card3: {
    backgroundColor: '#D4E0FB',
  },
  timeDuration: {
    fontSize: 16,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: '#6C6868',
  },
  costcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cost: {
    fontSize: 40,
    fontWeight: constant.FontWeight.heavy,
    color: '#3B3B3B',
    right: 5,
  },
  currency: {
    fontSize: 16,
    color: '#3B3B3B',
  },
  contentlineone: {
    fontSize: 16,
    marginTop: 8,
    color: '#606060',
  },
  contentlinetwo: {
    fontSize: 16,
    marginTop: 8,
    color: '#606060',
  },
  contentlinethree: {
    fontSize: 16,
    marginTop: 8,
    color: '#606060',
  },
});

export default styles;
