import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Alert, Text, Dimensions} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import InputText from '../../component/InputText';
import Button from '../../component/Button';
import routeNames from '../../constants/routeNames';
import {getData, storeData} from '../../Authcontext/Async';
import {CITY_API, NATIONALITY_API} from '../../constants/Api';
import {GetApi, PostApi} from '../../services/postServices';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

const Nationality = ({navigation}) => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const route = useRoute();
  const {gender} = route.params;
  const isRTL = i18next.language === 'ar';

  const [selectedNationality, setSelectedNationality] = useState({
    label: '',
    value: '',
  });
  const [selectedPOR, setSelectedPOR] = useState([]);
  const [selectedCity, setSelectedCity] = useState({label: '', value: ''});
  const [search, setSearch] = useState('');
  const [nationOption, setNationOption] = useState([]);
  const [filteredNationOption, setFilteredNationOption] = useState([]);
  const [POR, setPOR] = useState([]);
  const [filteredPOR, setFilteredPOR] = useState([]);
  const [City, setCity] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);
  const [modalVisibleResidence, setModalResidenceVisible] = useState(false);
  const [modalVisibleCity, setModalCityVisible] = useState(false);
  const [modalVisibleNationality, setModalNationalityVisible] = useState(false);
  const [errorNationality, setErrorNationality] = useState('');
  const [errorPOR, setErrorPOR] = useState('');
  const [errorCity, setErrorCity] = useState('');
  const [loadingNationality, setLoadingNationality] = useState(false);
  const [loadingPor, setLoadingPor] = useState(false);
  const [loadingCity, setLoadingCity] = useState(false);
  const [modalHeight, setModalHeight] = useState('auto');

  const countriesNearUSA = [
    { id: 1, label: 'United States', label_ar: 'United States' },
    { id: 2, label: 'Canada', label_ar: 'Canada' },
    { id: 3, label: 'Mexico', label_ar: 'Mexico' },
    { id: 4, label: 'Cuba', label_ar: 'Cuba' },
    { id: 5, label: 'Bahamas' , label_ar: 'Bahamas' },
    { id: 6, label: 'Greenland', label_ar: 'Greenland' },
  ];

  const citiesAndPortsInUSA = [
    { id: 1, label: 'New York City', label_ar: 'نيويورك' },
    { id: 2, label: 'Los Angeles', label_ar: 'لوس أنجلوس' },
    { id: 3, label: 'Chicago', label_ar: 'شيكاغو' },
    { id: 4, label: 'Houston', label_ar: 'هيوستن' },
    { id: 5, label: 'Port of Miami', label_ar: 'ميناء ميامي' },
  ];
  
  const placesOfResidenceInUSA = [
    { value: 1,id: 1, label: 'New York City, NY', label_ar: 'نيويورك، نيويورك' },
    { value: 2,id: 2, label: 'Los Angeles, CA', label_ar: 'لوس أنجلوس، كاليفورنيا' },
    { value: 3,id: 3, label: 'Chicago, IL', label_ar: 'شيكاغو، إلينوي' },
    { value: 4,id: 4, label: 'Houston, TX', label_ar: 'هيوستن، تكساس' },
    { value: 5,id: 5, label: 'Miami, FL', label_ar: 'ميامي، فلوريدا' },
  ];
  

  const handleCountrySelection = id => {
    try {
      const selectedCountry = nationOption.find(
        nationOption => nationOption === id,
      );
      console.log(selectedCountry);
      
      storeData('selectedCountryID', selectedCountry.value);
      setSelectedNationality(selectedCountry);
      storeData('nationality', selectedCountry.labelDisplay);
      storeData('nationality_ar', selectedCountry.label_ar);
      setSelectedCity({label: '', value: ''});
      setSelectedPOR({label: '', value: ''});
      setErrorNationality('');
    } catch (error) {
      console.error('Error handling country selection:', error);
    }
  };
  // For Place of Residence Modal
  const handleOpenResidenceModal = () => {
    if (!selectedNationality?.value) {
      
      setErrorNationality(t('Please select nationality'));
      return;
    }
    setModalResidenceVisible(true);
  };

  // For City Modal
  const handleOpenCityModal = () => {
    if (!selectedNationality?.value) {
      setErrorNationality(t('Please select nationality'));
      return;
    }

    if (!selectedPOR?.value) {
      setErrorPOR(t('Please select place of residence'));
      return;
    }

    setModalCityVisible(true);
  };

 const handleValueChangePOR = async id => {
  try {
    const selectedpor = POR.find(por => por === id); // Ensure correct match
    console.log('Selected POR:', selectedpor);
    setSelectedPOR(selectedpor); // Updates the state
    storeData('selectedPorID', selectedpor?.value || ''); // Use `selectedpor`
    storeData('place_of_residence', selectedpor?.label);
    storeData('por_ar', selectedpor?.label_ar || '');
    setErrorPOR('');
    await city(); // Fetch cities
    setSelectedCity({ label: '', value: '' }); // Reset city selection
  } catch (error) {
    console.error('Error handling POR selection:', error);
  }
};


  const handleValueChangeCity = value => {
    try {
      const selectedcity = City.find(city => city === value);
      setSelectedCity(selectedcity);
      storeData('city', selectedcity.labelDisplay);
      storeData('city_ar', selectedcity.label_ar);
      storeData('cityID', selectedcity.value);
      setErrorCity('');
    } catch (error) {
      console.error('Error handling city selection:', error);
    }
  };

  useEffect(() => {
    if (modalVisibleCity) city();
    if (modalVisibleNationality) country();
  }, [modalVisibleCity, modalVisibleNationality]);

  const country = async () => {
    try {
      setLoadingNationality(true);
      // const response = await GetApi(NATIONALITY_API);
      const nationsOptionData = countriesNearUSA.map(item => ({
        value: item.id,
        labelDisplay: item.label,
        label: isRTL ? item.label_ar : item.label,
        label_ar: item.label_ar,
      }));
      setNationOption(nationsOptionData);
      setFilteredNationOption(nationsOptionData);
      setLoadingNationality(false);

      // const gcc_country = response.data
      //   .filter(item => item.is_gcc === 1)
      //   .map(item => ({
      //     value: item.id,
      //     labelDisplay: item.label,
      //     label: isRTL ? item.label_ar : item.label,
      //     label_ar: item.label_ar,
      //   }));
      setPOR(placesOfResidenceInUSA);
      setFilteredPOR(placesOfResidenceInUSA);
    } catch (error) {
      console.error('Error fetching nationality data:', error);
    }
  };

  const city = async () => {
    try {
      setLoadingCity(true);
      const selectedPorID = await getData('selectedPorID');
      // const response = await PostApi(CITY_API + selectedPorID);
      const cityData = citiesAndPortsInUSA.map(item => ({
        value: item.id,
        labelDisplay: item.label,
        label: isRTL ? item.label_ar : item.label,
        label_ar: item.label_ar,
      }));
      setCity(cityData);
      setFilteredCity(cityData);
      setLoadingCity(false);
    } catch (error) {
      console.error('Error fetching city data:', error);
    }
  };

  const searchFunction = (text, data, setFilteredData) => {
    setSearch(text);
    if (text) {
      const searchText = text.toUpperCase();
      const newData = data.filter(
        item =>
          item.label.toUpperCase().includes(searchText) ||
          item.labelDisplay.includes(text) ||
          item.label_ar.includes(text),
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const handleNextButtonPress = () => {
    let isValid = true;
    if (!selectedNationality || !selectedNationality.value) {
      setErrorNationality('Please select nationality');
      isValid = false;
    } else {
      setErrorNationality('');
    }
    if (!selectedPOR || !selectedPOR.value) {
      setErrorPOR('Please select place of residence');
      isValid = false;
    } else {
      setErrorPOR('');
    }
    if (!selectedCity || !selectedCity.value) {
      setErrorCity('Please select city');
      isValid = false;
    } else {
      setErrorCity('');
    }
    if (isValid) navigate(routeNames.SKINCOLOR, {gender});
  };

  return (
    <>
      <View style={styles.container}>
        <HeadingText title="Nationality" />
        <TouchableOpacity
          onPress={() => {
            setModalNationalityVisible(true);
          }}>
          <View style={styles.inputstyle}>
            <InputText
              loading={loadingNationality}
              style={styles.input}
              rightIcon={true}
              placeholder={
                selectedNationality?.label || t('Select Nationality')
              }
              editable={false}
              dropdown={true}
            />
          </View>
        </TouchableOpacity>
        <ModalComponent
          SearchStyle={{
            height: '90%',
          }}
          searchbar={true}
          isVisible={modalVisibleNationality}
          onPress={() => setModalNationalityVisible(false)}
          onChangeText={text =>
            searchFunction(text, nationOption, setFilteredNationOption)
          }
          placeholder={'Search nationality'}
          closeIconModal={() => setModalNationalityVisible(false)}
          ModalButtontitle={'Done'}
          modalheading={'Nationality'}
          onRequestClose={() => setModalNationalityVisible(false)}
          // searchValue={searchText}
          // onSearchPress={() => searchFunction(searchText)}
        >
          <View style={styles.options}>
            <RadioButtonCompo
              options={filteredNationOption}
              onSelect={handleCountrySelection}
              initialValue={selectedNationality?.value}
            />
          </View>
        </ModalComponent>
        <Text
          style={[
            styles.errorText,
            {
              opacity: errorNationality ? 1 : 0,
              textAlign: isRTL ? 'right' : 'left',
            },
          ]}>
          {t(errorNationality)}
        </Text>

        <HeadingText title="Place Of Residence" />
        <TouchableOpacity onPress={handleOpenResidenceModal}>
          <View style={styles.inputstyle}>
            <InputText
              loading={loadingPor}
              style={styles.input}
              placeholder={selectedPOR?.label || t('Select Place Of Residence')}
              editable={false}
              Icons={true}
              rightIcon={true}
              dropdown={true}
            />
          </View>
        </TouchableOpacity>
        <ModalComponent
          SearchStyle={{
            height: '68%',
          }}
          searchbar={true}
          isVisible={modalVisibleResidence}
          onPress={() => setModalResidenceVisible(false)}
          closeIconModal={() => setModalResidenceVisible(false)}
          onChangeText={text => searchFunction(text, POR, setFilteredPOR)}
          ModalButtontitle={'Done'}
          placeholder={'Search  Place Of Residence'}
          modalheading={'Place Of Residence'}
          onRequestClose={() => setModalResidenceVisible(false)}
          // searchValue={searchText}
          onSearchPress={() => searchFunction(searchText)}>
          <View style={styles.options}>
            <RadioButtonCompo
              options={filteredPOR}
              onSelect={handleValueChangePOR}
              initialValue={selectedPOR?.value}
            />
          </View>
        </ModalComponent>
        <Text
          style={[
            styles.errorText,
            {opacity: errorPOR ? 1 : 0, textAlign: isRTL ? 'right' : 'left'},
          ]}>
          {t(errorPOR)}
        </Text>

        <HeadingText title="City" />
        <TouchableOpacity
          onPress={() => {
            handleOpenCityModal();
            const initialHeight = City.length * 92;
            const maxHeight = Dimensions.get('window').height;
            setModalHeight(Math.min(initialHeight, maxHeight));
          }}>
          <View style={styles.inputstyle}>
            <InputText
              loading={loadingCity}
              style={styles.input}
              rightIcon={true}
              placeholder={selectedCity?.label || t('Select City')}
              editable={false}
              dropdown={true}
            />
          </View>
        </TouchableOpacity>
        <ModalComponent
          SearchStyle={{
            height: modalHeight,
          }}
          searchbar={true}
          isVisible={modalVisibleCity}
          placeholder={'Search city'}
          onPress={() => setModalCityVisible(false)}
          onChangeText={text => searchFunction(text, City, setFilteredCity)}
          closeIconModal={() => setModalCityVisible(false)}
          ModalButtontitle={'Done'}
          modalheading={'City'}
          onRequestClose={() => setModalCityVisible(false)}
          // searchValue={searchText}
          onSearchPress={() => searchFunction(searchText)}>
          <View style={styles.options}>
            <RadioButtonCompo
              options={filteredCity}
              onSelect={handleValueChangeCity}
              initialValue={selectedCity?.value}
            />
          </View>
        </ModalComponent>
        <Text
          style={[
            styles.errorText,
            {opacity: errorCity ? 1 : 0, textAlign: isRTL ? 'right' : 'left'},
          ]}>
          {t(errorCity)}
        </Text>
      </View>
      <Button
        title="Next"
        IconeName={'arrowright'}
        onPress={handleNextButtonPress}
      />
    </>
  );
};

export default Nationality;
