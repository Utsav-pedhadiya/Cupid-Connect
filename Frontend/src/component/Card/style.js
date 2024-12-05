import {Dimensions, StyleSheet} from 'react-native';
import constant from '../../constants/constant';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  cardContainer: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },
  cardGradient: {
    paddingLeft: 20,
    paddingBottom: 10,
    borderRadius: 20,
    position: 'relative',
  },
  circleShapeBig: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // top: -50,
    top: 10,
    left: Dimensions.get('window').width / 2 - 50,
    zIndex: 1,
  },
  cardContent: {
    marginTop: 40,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4caf50',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 18,
    color: '#666',
    marginVertical: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cardPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cardCurrency: {
    fontSize: 18,
    color: '#666',
    marginLeft: 5,
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
  },
  featuresContainer: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  // featureItem: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: 5,
  // },
  // featureText: {
  //   fontSize: 16,
  //   color: '#333333',
  //   marginLeft: 10,
  // },
});
export default styles;
