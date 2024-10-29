import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';

const SecondaryText = ({secondTitle, imageSource, introsecondarytitle}) => {
  return (
    <>
      <View style={styles.container}>
        {imageSource && <Image source={imageSource} style={styles.image} />}
        <Text style={styles.text}>{secondTitle}</Text>
        {introsecondarytitle && (
          <Text style={styles.introsecondarytitle}>{introsecondarytitle}</Text>
        )}
      </View>
    </>
  );
};

export default SecondaryText;
