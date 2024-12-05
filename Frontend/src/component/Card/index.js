import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import styles from './style'; 

const CardContainer = ({
  timeDuration,
  cost,
  currency,
  contentlineone,
  planName,
  onPress,
  backgroundColor,
}) => {
  const { t } = useTranslation();
  
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container]}>
      <View style={[styles.cardContainer, { backgroundColor }]}>
        <View style={styles.circleShapeBig}>
          <Icon name="diamond" size={40} color="#fff"  />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.planName}>{t(planName)}</Text>
          <Text style={styles.cardTitle}>{t(timeDuration)}Plan</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.cardCurrency}>{(currency) || '$'}</Text>
            <Text style={styles.cardPrice}>{t(cost)}</Text>
          </View>
          <View style={styles.featuresContainer}>
            <Text style={styles.cardDescription}>{t(contentlineone)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardContainer;
