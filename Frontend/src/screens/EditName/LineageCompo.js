import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import RadioButtonCompo from '../../component/Radiobutton';
import {Lineage} from './Data';
import Button from '../../component/Button';
import {translateOptions} from '../../services/utils';

export const LineageCompo = ({title, onSaveData, Setlineage, lineage}) => {
  const handleUpdate = () => {
    onSaveData('lineage', lineage);
  };
  const translatedLineageOptions = translateOptions(Lineage);

  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <RadioButtonCompo
          options={translatedLineageOptions}
          initialValue={lineage}
          onSelect={value => {
            Setlineage(value.value);
          }}
        />
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
