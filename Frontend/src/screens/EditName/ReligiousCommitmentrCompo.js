import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import RadioButtonCompo from '../../component/Radiobutton';
import { ReligiousCommitmentOption} from './Data';
import Button from '../../component/Button';
import { translateOptions } from '../../services/utils';

export const ReligiousCommitmentrCompo = ({
  title,
  onSaveData,
  religious,
  SetReligious,
}) => {


  const handleUpdate = () => {
    onSaveData('religious_commitment', religious);
  };
  const translatedRCommitmentOptions = translateOptions(ReligiousCommitmentOption);
  
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <RadioButtonCompo
          options={translatedRCommitmentOptions}
          initialValue={religious}
          onSelect={value => {
            SetReligious(value.value);
          }}
        />
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
