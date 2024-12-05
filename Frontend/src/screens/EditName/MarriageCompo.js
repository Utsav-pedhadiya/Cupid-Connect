import React from 'react';
import {useState} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import HeadingText from '../../component/HeadingText';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import styles from './style';
import {MarriageTypeData} from './Data';
import {translateOptions} from '../../services/utils';
export const MarriageCompo = ({
  title,
  marriage,
  setSelectedMarriage,
  onSaveData,
  selectedMarriage,
  Setmarriage,
}) => {
  const handlePressUpdate = () => {
    onSaveData('type_of_marriage', marriage);
  };
  const handleUpdate = value => {
    Setmarriage(value.value);
  };

  const translatedMarriageOptions = translateOptions(MarriageTypeData);
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />

        <RadioButtonCompo
          options={translatedMarriageOptions}
          initialValue={marriage}
          onSelect={handleUpdate}
        />
      </View>
      <Button title="Save Changes" onPress={handlePressUpdate} />
    </>
  );
};
