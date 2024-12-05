import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import RadioButtonCompo from '../../component/Radiobutton';
import {storeData} from '../../Authcontext/Async';
import {HijabTypeData, MarriageTypeData, SkinColorData} from './data';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const SkinColor = ({navigation}) => {
  const [selectedSkin, setSelectedSkin] = useState('');
  const [selectedMarriage, setSelectedMarriage] = useState('');
  const [selectedHijab, setSelectedHijab] = useState('');
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const route = useRoute();
  const {gender} = route.params;

  const handleSelect = value => {
    const selectedSkinColor = value.value;
    storeData('skinColor', selectedSkinColor);
    setSelectedSkin(value);
  };

  const handleSelectMarriage = value => {
    const selectedMarriageType = value.value;
    storeData('typeofmarriage', selectedMarriageType);
    setSelectedMarriage(value);
  };

  const handleSelectHijab = value => {
    const selectedHijabType = value.value;
    storeData('typeofhijab', selectedHijabType);
    setSelectedHijab(value);
  };

  useEffect(() => {
    const defaultSkinColor = SkinColor[0];
    storeData('skinColor', defaultSkinColor.value);

    const defaultMarriageType = MarriageType[0];
    storeData('typeofmarriage', defaultMarriageType.value);

    const defaultHijabType = HijabType[0];
    storeData('typeofhijab', defaultHijabType.value);
  }, []);

  const SkinColor = SkinColorData.map(item => {
    return {label: t(item.label), value: item.value};
  });

  const MarriageType = MarriageTypeData.map(item => {
    return {label: t(item.label), value: item.value};
  });

  const HijabType = HijabTypeData.map(item => {
    return {label: t(item.label), value: item.value};
  });

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <HeadingText title="Skin Color" />
          <RadioButtonCompo
            options={SkinColor}
            onSelect={handleSelect}
            initialValue={'White'}
          />
          {gender === 'Female' && (
            <>
              <HeadingText title="Type Of Marriage" />
              <RadioButtonCompo
                options={MarriageType}
                onSelect={handleSelectMarriage}
                initialValue={'The only wife'}
              />
              <HeadingText title="Type Of Hijab" />
              <RadioButtonCompo
                options={HijabType}
                onSelect={handleSelectHijab}
                initialValue={'Niqab'}
              />
            </>
          )}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            title="Next"
            IconeName={'arrowright'}
            onPress={() => {
              navigate(routeNames.PROFESSION);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default SkinColor;
