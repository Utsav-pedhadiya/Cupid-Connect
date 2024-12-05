import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import RadioButtonCompo from '../../component/Radiobutton';
import {Maritial, maritalOption} from './Data';
import Button from '../../component/Button';

import { translateOptions } from '../../services/utils';

export const MaritalStatusCompo = ({
  title,
  onSaveData,
  Setmarital,
  marital,
}) => {

  const handleUpdate = () => {
    onSaveData('martial_status', marital);
  };
  const translatedMaritialOptions = translateOptions(Maritial);
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <RadioButtonCompo
          options={translatedMaritialOptions}
          initialValue={marital}
          onSelect={value => {
            Setmarital(value.value);
          }}
        />
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
