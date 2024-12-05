import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  InputAccessoryView,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';
import TextArea from '../../component/TextArea';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import Button from '../../component/Button';
import ModalComponent from '../../component/Modal';
import InputText from '../../component/InputText';
import ModalButton from '../../component/ModalButton';
import RadioButtonCompo from '../../component/Radiobutton';
import {useAuth} from '../../Authcontext/AuthContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {REGISTRATION_API} from '../../constants/Api';
import {getData, storeData} from '../../Authcontext/Async';
import {Hobbies} from './data';
import {useTranslation} from 'react-i18next';
import CheckboxCompo from '../../component/Checkbox';
import i18next from 'i18next';

const AboutYourself = ({navigation}) => {
  const {login} = useAuth();
  const [selectedInterests, setSelectedInterests] = useState(['Archery']);
  const {t, i18n} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState(null);
  const [aboutYourself, setAboutYourself] = useState('');
  const [qualitiesLooking, setQualitiesLooking] = useState(['']);
  const [qualitiesError, setQualitiesError] = useState('');
  const [aboutError, setAboutError] = useState('');
  const isRTL = i18next.language === 'ar';
  useEffect(() => {
    const dataSelection = Hobbies[0];
    setSelectedHobbies(dataSelection.value);
    storeData('interestData', selectedInterests);
  }, []);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRegistration = async () => {
    if (!aboutYourself.trim()) {
      setAboutError('Please write about yourself');
    }

    if (qualitiesLooking.some(quality => !quality)) {
      setQualitiesError('Please write about the qualities you are looking for');
    }

    if (!aboutYourself.trim() || qualitiesLooking.some(quality => !quality)) {
      return;
    }
    storeData('aboutyour', aboutYourself);
    storeData('Quality', qualitiesLooking);

    const number = await getData('number');
    const gender = await getData('gender');
    const username = await getData('username');
    const dob = await getData('dob');
    const nationality = await getData('nationality');
    const por = await getData('place_of_residence');
    const city = await getData('city');
    const skinColor = await getData('skinColor');
    const typeofmarriage = await getData('typeofmarriage');
    const typeofhijab = await getData('typeofhijab');
    const maritalStatus = await getData('maritalStatus');
    const religiousCommitment = await getData('religiousCommitment');
    const financialSituation = await getData('financialSituation');
    const bodyTone = await getData('bodyTone');
    const UserHeight = await getData('UserHeight');
    const UserWeight = await getData('UserWeight');
    const aboutyourSelf = await getData('aboutyour');
    const interests = await getData('interestData');
    const lineage = await getData('lineage');
    const age = await getData('age');
    const job = await getData('job');
    const healthStatus = await getData('healthStatus');
    const numberOfChildren = await getData('numberOfChildren');
    const QualityPara = await getData('Quality');
    const DeviceToken = await getData('device_token');
    const nationality_ar = await getData('nationality_ar');
    const por_ar = await getData('por_ar');
    const city_ar = await getData('city_ar');
   

    const userData = {
      number: number,
      otp: '163037',
      gender: gender,
      name: username,
      dob: dob,
      age: age,
      nationality: nationality,
      place_of_residence: por,
      city: city,
      job: job,
      lineage: lineage,
      skin_color: skinColor,
      type_of_marriage: typeofmarriage,
      type_of_hijab: typeofhijab,
      martial_status: maritalStatus,
      number_of_children: numberOfChildren,
      religious_commitment: religiousCommitment,
      financial_situation: financialSituation,
      height: UserHeight,
      width: UserWeight,
      body_tone: bodyTone,
      health_status: healthStatus,
      write_about_yourself: aboutyourSelf,
      qualities: QualityPara,
      interests: interests,
      device_token: DeviceToken,
      nationality_ar: nationality_ar,
      por_ar: por_ar,
      city_ar: city_ar,
    
    };
 console.log("userData",userData);
    try {
      const response = await axios.post(REGISTRATION_API, userData);
      const Token = response?.data?.token;
      const id = response?.data?.profile?.id;
      const selectedPorID = await getData('selectedPorID');
      const selectedCountryID = await getData('selectedCountryID');
      const cityID = await getData('cityID');
      storeData('Token', Token);
      storeData(`selectedPorID_${id}`, selectedPorID);
      storeData(`selectedCountryID_${id}`, selectedCountryID);
     
      storeData(`cityID_${id}`, cityID);
      const Quality = response?.data?.profile?.qualities;
      const QualityData = await Quality.map(Quality => Quality?.quality_name);
      storeData('Quality', QualityData);
      login(Token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAboutYourselfChange = text => {
    setAboutYourself(text);
    setAboutError('');
    if (text.length >= 300) {
      setAboutError('Please limit to 300 character or less');
    }
  };

  const handleQualityChange = text => {
    const qualities = text.split(',');
    setQualitiesError('');
    if (text.length >= 250) {
      setQualitiesError('Please limit to 250 character or less');
    }
    setQualitiesLooking(qualities);
  };

  const handleInterest = selectedValue => {
    const updatedSelectedInterests = selectedInterests.includes(selectedValue)
      ? selectedInterests.filter(item => item !== selectedValue)
      : [...selectedInterests, selectedValue];
    setSelectedInterests(updatedSelectedInterests);
    storeData('interestData', updatedSelectedInterests);
  };

  const getInterestsPlaceholder = () => {
    if (selectedInterests.length === 0) {
      return t('Select hobbies');
    } else if (selectedInterests.length <= 2) {
      return selectedInterests.map(interest => t(interest)).join(', ');
    } else {
      const truncatedInterests = selectedInterests.slice(0, 2);
      return `${truncatedInterests.map(interest => t(interest)).join(', ')}...`;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={120}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{bottom: 5}}>
            <HeadingText title="Write About Yourself" />
          </View>
          <View style={styles.inputstyle}>
            <TextArea
              placeholder="Write About Yourself"
              value={aboutYourself}
              onChangeText={handleAboutYourselfChange}
              maxLength={300}
            />
            <Text
              style={[styles.errorText, {textAlign: isRTL ? 'right' : 'left'}]}>
              {t(aboutError)}
            </Text>
          </View>

          <View style={{bottom: 35}}>
            <HeadingText title="Qualities you are looking for" />
          </View>
          <View style={styles.inputstyleQuality}>
            <TextArea
              placeholder="Qualities you are looking for"
              textAreaQualitiesStyle={true}
              placeholderTextleft={true}
              value={qualitiesLooking.join(', ')}
              onChangeText={handleQualityChange}
              maxLength={250}
            />
            <Text
              style={[
                styles.errorText,
                {
                  opacity: qualitiesError ? 1 : 0,
                  textAlign: isRTL ? 'right' : 'left',
                },
              ]}>
              {t(qualitiesError)}
            </Text>
          </View>

          <View style={{bottom: 65}}>
            <HeadingText title="Interests" />
          </View>

          <TouchableOpacity onPress={openModal} style={{bottom: 85}}>
            <InputText
              style={styles.input}
              placeholder={getInterestsPlaceholder()}
              editable={false}
              rightIcon={true}
              dropdown={true}
            />
          </TouchableOpacity>
          <ModalComponent
            isVisible={modalVisible}
            closeIconModal={closeModal}
            onPress={closeModal}
            ModalButtontitle={'Done'}
            modalheading={'Interests'}>
            <View style={styles.options}>
              <CheckboxCompo
                options={Hobbies.map(hobby => ({
                  ...hobby,
                  label: t(hobby.label),
                }))}
                onSelect={handleInterest}
                status={value => selectedInterests.includes(value)}
              />
            </View>
          </ModalComponent>
        </ScrollView>
        <Button title="Register" onPress={handleRegistration} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AboutYourself;
