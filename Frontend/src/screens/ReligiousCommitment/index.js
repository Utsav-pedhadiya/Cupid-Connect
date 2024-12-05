import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import RadioButtonCompo from '../../component/Radiobutton';
import {storeData} from '../../Authcontext/Async';
import {FinancialSituation, ReligiousCommitmentData} from './data';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const ReligiousCommitment = ({navigation}) => {
  const {navigate} = useNavigation();
  const {t, i18n} = useTranslation();
  useEffect(() => {
    const defaultReligiousCommitment = ReligiousCommitment[0];
    storeData('religiousCommitment', defaultReligiousCommitment.value);
    const defaultFinancialSituation = FinancialSituationData[0];
    storeData('financialSituation', defaultFinancialSituation.value);
  }, []);
  const handleReligious = value => {
    const ReligiousCommitmentData = value.value;
    storeData('religiousCommitment', ReligiousCommitmentData);
  };
  const handleFinancial = value => {
    const Financial = value.value;
    storeData('financialSituation', Financial);
  };
  const ReligiousCommitment = ReligiousCommitmentData.map(item => {
    return { label: t(item.label), value: item.value }
  });
  const FinancialSituationData = FinancialSituation.map(item => {
    return { label: t(item.label), value: item.value }
  });
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeadingText title="Religious Commitment" />
          <RadioButtonCompo
            options={ReligiousCommitment}
            onSelect={handleReligious}
            initialValue={'Committed and Always Pray'}
          />
          <HeadingText title="Financial situation" />
          <RadioButtonCompo
            options={FinancialSituationData}
            onSelect={handleFinancial}
            initialValue={'Poor'}
          />
        </ScrollView>
        <Button
          title="Next"
          IconeName={'arrowright'}
          onPress={() => {
            navigate(routeNames.BODYSTRUCTURE);
          }}
        />
      </View>
    </>
  );
};
export default ReligiousCommitment;
