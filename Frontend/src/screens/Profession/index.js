import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import RadioButtonCompo from '../../component/Radiobutton';
import {Lineage, ProfessionData} from './data';
import {storeData} from '../../Authcontext/Async';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

const Profession = ({navigation}) => {
  const {navigate} = useNavigation();
  const [selectedProfession, setselectedProfession] = useState('');
  const [selectedlineage, setselectedLineage] = useState(null);
  const {t} = useTranslation();
  const handleselectLineage = value => {
    const Lineage = value.label;
    storeData('lineage', Lineage);
    setselectedLineage(value);
  };

  const handleselectProfession = value => {
    const Profession = value.value;
    storeData('job', Profession);
    setselectedProfession(value);
  };

  useEffect(() => {
    const defaultProfessionData = Profession[0];
    storeData('job', defaultProfessionData.value);
    const defaultLineage = LineageOption[0];
    storeData('lineage', defaultLineage.value);
  }, []);

  const LineageOption = Lineage.map(item => {
    return { label: t(item.label), value: item.value }
  });
  const Profession = ProfessionData.map(item => {
    return { label: t(item.label), value: item.value }
  });
  return (
    <>
    <View style={styles.container}>
    <ScrollView>
        <HeadingText title="Lineage" />
        <RadioButtonCompo
          options={LineageOption}
          onSelect={handleselectLineage}
          initialValue={'Tribal'}
        />
        <HeadingText title="Profession" />
        <RadioButtonCompo
          options={Profession}
          onSelect={handleselectProfession}
          value={selectedProfession}
          initialValue={'Government Department'}
        />
        </ScrollView>
      </View>
      <Button
      title="Next"
      IconeName={'arrowright'}
      onPress={() => {
        navigate(routeNames.MARITIALSTATUS);
      }}
      />
    </>
  );
};

export default Profession;
