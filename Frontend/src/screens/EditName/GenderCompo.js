// GenderCompo.js
import React from 'react';
import {Dimensions, View} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import RadioButtonCompo from '../../component/Radiobutton';
import {GenderOption} from './Data';
import Button from '../../component/Button';
import {translateOptions} from '../../services/utils';
export const GenderCompo = ({title, onSaveData, gender, setGender}) => {
  const handleUpdate = () => {
    onSaveData('gender', gender);
  };

  const translatedGenderOptions = translateOptions(GenderOption);

  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <RadioButtonCompo
          options={translatedGenderOptions}
          initialValue={gender}
          onSelect={value => setGender(value.value)}
        />
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
