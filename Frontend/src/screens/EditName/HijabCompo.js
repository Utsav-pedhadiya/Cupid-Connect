import React from 'react';
import {useState} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import HeadingText from '../../component/HeadingText';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import styles from './style';
import {HijabTypeData} from './Data';
import {translateOptions} from '../../services/utils';
export const HijabCompo = ({
  title,
  hijab,
  setSelectedHijab,
  onSaveData,
  selectedHijab,
  Sethijab,
  selectedHijabTypeAr,
}) => {
  const handlePressUpdate = () => {
    onSaveData('type_of_hijab', hijab);
  };
  const handleUpdate = value => {
    Sethijab(value.value);
  };
  const translatedHijabOptions = translateOptions(HijabTypeData);
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />

        <RadioButtonCompo
          options={translatedHijabOptions}
          initialValue={hijab}
          onSelect={handleUpdate}
        />
      </View>
      <Button title="Save Changes" onPress={handlePressUpdate} />
    </>
  );
};
