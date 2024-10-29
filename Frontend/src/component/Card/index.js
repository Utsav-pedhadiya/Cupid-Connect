import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Card = ({
  timeDuration,
  cost,
  currency,
  contentlineone,
  contentlinetwo,
  contentlinethree,
  onPress,
  backgroundColor,
  card2,
  card3,
}) => {
  const cardStyle = card2 ? styles.card2 : styles.description;
  const cardStyle2 = card3 ? styles.card3 : styles.description;
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.card, cardStyle, cardStyle2, { backgroundColor }]}> 
          <View style={styles.timeDuration}>
            <Text style={styles.time}>{timeDuration}</Text>
          </View>
          <View style={styles.costcontainer}>
            <Text style={styles.cost}>{cost}</Text>
            <Text style={styles.currency}>{currency}</Text>
          </View>
          <Text style={styles.contentlineone}>{contentlineone}</Text>
          <Text style={styles.contentlineone}>{contentlinetwo}</Text>
          <Text style={styles.contentlineone}>{contentlinethree}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Card;
