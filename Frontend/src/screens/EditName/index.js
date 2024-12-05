import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View, KeyboardAvoidingView, Dimensions} from 'react-native';
import styles from './style';
import Header from '../../component/Header';
import RenderContent from './RenderContent';
import {
  CITY_API,
  NATIONALITY_API,
  STATE_API,
  UPDATE_BY_ID,
} from '../../constants/Api';
import axios from 'axios';
import {getData, storeData} from '../../Authcontext/Async';
import {useAuth} from '../../Authcontext/AuthContext';
import {GetApi, PostApi} from '../../services/postServices';
import i18next from 'i18next';

const EditName = ({navigation, route}) => {
  const {title} = route.params;
  const {logout} = useAuth();
  const isRTL = i18next.language === 'ar';
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [por, Setpor] = useState('');
  const [city, Setcity] = useState('');
  const [job, Setjob] = useState('');
  const [marriage, Setmarriage] = useState('');
  const [hijab, Sethijab] = useState('');
  const [lineage, Setlineage] = useState('');
  const [skin, setSkin] = useState('');
  const [marital, Setmarital] = useState('');
  const [religious, SetReligious] = useState('');
  const [financial, Setfinancial] = useState('');
  const [body, Setbody] = useState('');
  const [health, Sethealth] = useState('');
  const [FormatedHobbies, setFormatedHobbies] = useState('');
  const [Qualities, setQualities] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedPOR, setSelectedPOR] = useState(null);
  const [selectedHobbies, setSelectedHobbies] = useState(['']);
  const [selectedJob, setSelecteJob] = useState(null);
  const [selectedMarriage, setSelectedMarriage] = useState('');
  const [selectedHijab, setSelectedHijab] = useState('');
  const [selectedLineage, setSelecteLineage] = useState(null);
  const [selectedFinancial, setSelecteFinancial] = useState(null);
  const [selectedBody, setSelecteBody] = useState(null);
  const [selectedHelth, setSelecteHelth] = useState(null);
  const [Por, setPOR] = useState([]);
  const [City, setCity] = useState([]);
  const [otherHobbies, setOtherHobbies] = useState('');
  const [nation, setNation] = useState([]);
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const formatedhobbies = await getData('FormatedHobbies');
      const profile_Details = await getData('profile_Details');
      setId(profile_Details.id);
      const qualities = await getData('Quality');
      setProfileDetails(profile_Details);
      setQualities(qualities);
      setFormatedHobbies(formatedhobbies);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching profile details:', error);
      setLoading(false);
    }
  });

  useEffect(() => {
    if (title == 'Hobbies') {
      setFormatedHobbies(profileDetails?.interests);
      setSelectedHobbies(profileDetails?.interests);
    }
    if (title == 'Health status') {
      Sethealth(profileDetails?.health_status);
    }
    if (title === 'Marital Status') {
      Setmarital(profileDetails?.martial_status);
    }
    if (title === 'Financial situation') {
      Setfinancial(profileDetails?.financial_situation);
    }
    if (title === 'Religious Commitment') {
      SetReligious(profileDetails?.religious_commitment);
    }
    if (title === 'Skin Color') {
      setSkin(profileDetails?.skin_color);
    }
    if (title === 'Lineage') {
      Setlineage(profileDetails?.lineage);
    }
    if (title === 'Job') {
      Setjob(profileDetails?.job);
    }
    if (title === 'Type Of Marriage') {
      Setmarriage(profileDetails?.type_of_marriage);
    }
    if (title === 'Type Of Hijab') {
      Sethijab(profileDetails?.type_of_hijab);
    }

    if (title === 'Nationality') {
      country();
      {
        isRTL
          ? setSelectedNationality(profileDetails?.nationality_ar)
          : setSelectedNationality(profileDetails?.nationality);
      }
    }
    if (title === 'City') {
      handleCity();

      {
        isRTL
          ? setSelectedCity(profileDetails?.city_ar)
          : setSelectedCity(profileDetails?.city);
      }
    }
    if (title === 'Place Of Residence') {
      POR();

      {
        isRTL
          ? setSelectedPOR(profileDetails?.por_ar)
          : setSelectedPOR(profileDetails?.place_of_residence);
      }
    }
    if (title === 'Gender') {
      setGender(profileDetails?.gender);
    }
    if (title === 'Body Tone') {
      Setbody(profileDetails?.body_tone);
    }
  }, [profileDetails, title]);

  const handleIconPress = () => {
    navigation.goBack();
  };

  const country = async () => {
    try {
      const response = await GetApi(NATIONALITY_API);
      const nations = response?.data.map(item => {
        return {
          value: item.id,
          labelDisplay: item.label,
          label: isRTL ? item.label_ar : item.label,
          label_ar: item.label_ar,
        };
      });
      setNation(nations);
      const gcc_country = response.data.filter(item => item.is_gcc === 1);
      setPOR(gcc_country);
      setLoading(false);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error calling API:', error);
      setLoading(false);
    }
  };

  const POR = async () => {
    try {
      const response = await GetApi(NATIONALITY_API);
      const gcc_country = response.data.filter(item => item.is_gcc === 1);
      const porData = gcc_country.map(item => {
        return {
          value: item.id,
          labelDisplay: item.label,
          label: isRTL ? item.label_ar : item.label,
          label_ar: item.label_ar,
        };
      });
      setPOR(porData);

      setLoading(false);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error calling API:', error);
      setLoading(false);
    }
  };

  const handleCity = async () => {
    try {
      const selectedPORID = await getData(`selectedPorID_${id}`);

      const response = await PostApi(CITY_API + selectedPORID);
      const cityData = response.data.map(item => {
        return {
          value: item.id,
          labelDisplay: item.label,
          label: isRTL ? item.label_ar : item.label,
          label_ar: item.label_ar,
        };
      });
      setCity(cityData);

      storeData('city', City);
      setLoading(false);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error calling API:', error);
      setLoading(false);
    }
  };

  const handleUpdate = async (key, value) => {
    try {
      const otherHobbiesValue = otherHobbies.trim();
      const updatedInterests =
        otherHobbiesValue !== ''
          ? [...selectedHobbies, otherHobbiesValue]
          : selectedHobbies;
      const profile_Details = await getData('profile_Details');
      const nationality_ar = await getData('nationality_ar');
      const city_ar = await getData('city_ar');
      const por_ar = await getData('por_ar');
      const type_of_marriage_ar = await getData('type_of_marriage_ar');
      const type_of_hijab_ar = await getData('type_of_hijab_ar');
      const id = await getData('Profile_ID');
      const storedToken = await getData('Token');
      const Qualities = await getData('Quality');
      {
        gender === 'Male'
          ? storeData('gender', 'Male')
          : storeData('gender', 'Female');
      }
      const updatedpara = {
        number: profile_Details.number,
        name: key === 'name' ? value : profileDetails?.name,
        number_of_children:
          key === 'number_of_children'
            ? value
            : profileDetails?.number_of_children,
        write_about_yourself:
          key === 'write_about_yourself'
            ? value
            : profileDetails?.write_about_yourself,
        height: key === 'height' ? value : profileDetails?.height,
        interests: key === 'interests' ? value : profileDetails?.interests,
        health_status:
          key === 'health_status' ? value : profileDetails?.health_status,
        qualities: key === 'Qualities' ? [value] : Qualities,
        age: key === 'Age' ? value : profileDetails?.age,
        gender: key === 'gender' ? value : profileDetails?.gender,
        lineage: key === 'lineage' ? value : profileDetails?.lineage,
        martial_status:
          key === 'martial_status' ? value : profileDetails?.martial_status,
        skin_color: key === 'skin_color' ? value : profileDetails?.skin_color,
        religious_commitment:
          key === 'religious_commitment'
            ? value
            : profileDetails?.religious_commitment,
        job: key === 'job' ? value : profileDetails?.job,
        type_of_marriage:
          key === 'type_of_marriage' ? value : profileDetails?.type_of_marriage,
        type_of_hijab:
          key === 'type_of_hijab' ? value : profileDetails?.type_of_hijab,
        health_status:
          key === 'health_status' ? value : profileDetails?.health_status,
        body_tone: key === 'body_tone' ? value : profileDetails?.body_tone,
        financial_situation:
          key === 'financial_situation'
            ? value
            : profileDetails?.financial_situation,

        nationality: selectedNationality
          ? selectedNationality
          : profile_Details?.nationality,
        place_of_residence: selectedPOR
          ? selectedPOR
          : profile_Details?.place_of_residence,
        city: selectedCity ? selectedCity : profile_Details?.city,
        width: '50',
        interests_ar: ['interests_ar'],
        nationality_ar: nationality_ar,
        city_ar: city_ar,
        por_ar: por_ar,
        type_of_marriage_ar: type_of_marriage_ar,
        type_of_hijab_ar: type_of_hijab_ar,
      };

      const response = await PostApi(UPDATE_BY_ID + id, updatedpara);

      navigation.goBack();
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return !loading ? (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}>
      <View style={styles.container}>
        <Header onIconPress={handleIconPress} />
        <RenderContent
          title={title}
          profileDetails={profileDetails}
          handleUpdate={handleUpdate}
          gender={gender}
          setGender={setGender}
          id={id}
          lineage={lineage}
          Setlineage={Setlineage}
          setSelecteLineage={setSelecteLineage}
          selectedLineage={selectedLineage}
          religious={religious}
          selectedHobbies={selectedHobbies}
          setSelectedHobbies={setSelectedHobbies}
          FormatedHobbies={FormatedHobbies}
          otherHobbies={otherHobbies}
          setOtherHobbies={setOtherHobbies}
          setFormatedHobbies={setFormatedHobbies}
          nationality={nationality}
          setNationality={setNationality}
          nation={nation}
          setSelectedNationality={setSelectedNationality}
          selectedNationality={selectedNationality}
          por={por}
          Setpor={Setpor}
          Por={Por}
          setSelectedPOR={setSelectedPOR}
          selectedPOR={selectedPOR}
          handleCity={handleCity}
          city={city}
          Setcity={Setcity}
          City={City}
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          job={job}
          marriage={marriage}
          Setmarriage={Setmarriage}
          hijab={hijab}
          Sethijab={Sethijab}
          setSelecteJob={setSelecteJob}
          selectedJob={selectedJob}
          selectedMarriage={selectedMarriage}
          setSelectedMarriage={setSelectedMarriage}
          selectedHijab={selectedHijab}
          setSelectedHijab={setSelectedHijab}
          skin={skin}
          marital={marital}
          Setmarital={Setmarital}
          selectedFinancial={selectedFinancial}
          setSelecteFinancial={setSelecteFinancial}
          financial={financial}
          selectedBody={selectedBody}
          setSelecteBody={setSelecteBody}
          body={body}
          selectedHelth={selectedHelth}
          setSelecteHelth={setSelecteHelth}
          health={health}
          setQualities={setQualities}
          Qualities={Qualities}
          setSkin={setSkin}
          SetReligious={SetReligious}
        />
      </View>
    </KeyboardAvoidingView>
  ) : null;
};
export default EditName;
