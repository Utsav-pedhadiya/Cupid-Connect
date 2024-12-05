import React from 'react';
import {View} from 'react-native';
import styles from './style';
import HeadingText from '../../component/HeadingText';
import RadioButtonCompo from '../../component/Radiobutton';
import {SkinColorOption} from './Data';
import Button from '../../component/Button';
import {translateOptions} from '../../services/utils';

export const SkinColorCompo = ({title, onSaveData, skin, setSkin}) => {
  const handlePressUpdate = () => {
    onSaveData('skin_color', skin);
  };
  const handleUpdate = value => {
    setSkin(value.value);
  };

  const translatedSkincolorOptions = translateOptions(SkinColorOption);
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <RadioButtonCompo
          options={translatedSkincolorOptions}
          initialValue={skin}
          onSelect={handleUpdate}
        />
      </View>
      <Button title="Save Changes" onPress={handlePressUpdate} />
    </>
  );
};
