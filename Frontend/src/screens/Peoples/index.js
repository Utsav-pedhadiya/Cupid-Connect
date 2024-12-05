import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import styles from './style';
import HomeHeader from '../../component/HomeHeader';
import UserCard from '../../component/UserCard';
import ModalComponent from '../../component/Modal';
import SupportCard from '../../component/SupportCard';
import RangeSlider from '../../component/RangeSlider';
import RadioButtonCompo from '../../component/Radiobutton';
import {
  CITY_API,
  FILTER_DATA_API,
  GET_USER_DATA_API,
  NATIONALITY_API,
  SEARCH_API,
} from '../../constants/Api';
import routeNames from '../../constants/routeNames';

import {getData, storeData} from '../../Authcontext/Async';
import {useAuth} from '../../Authcontext/AuthContext';
import LoadingIndicator from '../../component/LoadingIndicator';
import {GetApi, PostApi} from '../../services/postServices';
import FiterButtons from '../../component/FilterButtons';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import i18next from 'i18next';

const People = () => {
  const {navigate} = useNavigation();
  const {logout} = useAuth();
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';
  const [filteredCity, setFilteredCity] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [visible, setvisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ageRange, setAgeRange] = useState(['', '']);
  const [length, setLength] = useState(['', '']);
  const [weight, setWeight] = useState(['', '']);
  const [sons, setSons] = useState(['', '']);
  const [userData, setUserData] = useState();
  const [filteredPOR, setFilteredPOR] = useState([]);
  const [filteredNationOption, setFilteredNationOption] = useState([]);
  const [min_age, setmin_age] = useState('18');
  const [max_age, setmax_age] = useState('20');
  const [min_length, setmin_length] = useState('180');
  const [max_length, setmax_length] = useState('190');
  const [min_weight, setmin_weight] = useState('88');
  const [max_weight, setmax_weight] = useState('50');
  // const [min_children, setmin_children] = useState('18');
  // const [max_children, setmax_children] = useState('20');
  const [modalVisibleResidence, setModalResidenceVisible] = useState(false);
  const [modalVisibleCity, setModalCityVisible] = useState(false);
  const [modalVisibleNationality, setModalNationalityVisible] = useState(false);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedPOR, setSelectedPOR] = useState(null);
  const [Nationalityy, setNationality] = useState(null);
  const [porr, setpor] = useState(null);
  const [cityy, setcity] = useState(null);
  const [job, setJob] = useState(null);
  const [maritialStatus, setmaritialStatus] = useState(null);
  const [typeOfMarriage, setTypeOfMarriage] = useState(null);
  const [typeOfHijab, setTypeOfHijab] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchh, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [nation, setNation] = useState([]);
  const [POR, setPOR] = useState([]);
  const [City, setCity] = useState([]);
  const [modalHeight, setModalHeight] = useState('auto');
  const {t} = useTranslation();
  const [gender, setGender] = useState(null);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    Modalhandle({});
    fetchData();
    handleRefresh();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  useFocusEffect(
    useCallback(() => {
      Modalhandle({});
      fetchData();
    }, []),
  );
  const handleRefresh = () => {
    setSearchText('');
    setAgeRange(['', '']);
    setLength(['', '']);
    setWeight(['', '']);
    setSons(['', '']);
    setNationality(null);
    setpor(null);
    setcity(null);
    setJob(null);
    setmaritialStatus(null);
    setTypeOfMarriage(null);
    setTypeOfHijab(null);
  };

  const onPressRightIcon = () => {
    setvisible(!visible);
  };

  //nationality
  const nationality = async () => {
    try {
      const response = await GetApi(NATIONALITY_API);
      const nations = response.data.map(item => {
        return {
          value: item.id,
          labelDisplay: item.label,
          label: isRTL ? item.label_ar : item.label,
          label_ar: item.label_ar,
        };
      });
      const gcc_country = response.data.filter(item => item.is_gcc === 1);
      setNation(nations);
      setFilteredNationOption(nations);
      const gcc = gcc_country.map(item => {
        return {
          value: item.id,
          labelDisplay: item.label,
          label: isRTL ? item.label_ar : item.label,
          label_ar: item.label_ar,
        };
      });
      setPOR(gcc);
      setFilteredPOR(gcc);
    } catch (error) {
      console.error('Error calling APIqqqq:', error);
    }
  };

  const openModalNationality = () => {
    setModalNationalityVisible(true);
    nationality();
  };

  const handleValueChangeNationality = value => {
    storeData('selectedFilterCountryID', value.value);
    setSelectedNationality(value.value);
    setNationality(value.label);
  };

  //POR
  const openModalResidence = () => {
    if (!selectedNationality) {
      return;

    }
    setModalResidenceVisible(true);
  };

  const handleValueChangePOR = value => {
    setSelectedPOR(value.value);
    storeData('selectedFilterPorID', value.value);
    setpor(value.label);
  };

  //city
  const city = async () => {
    try {
      const selectedFilterPorID = await getData('selectedFilterPorID');

      const response = await PostApi(CITY_API + selectedFilterPorID);
      const cityData = response.data.map(item => {
        return {
          value: item.id,
          labelDisplay: item.label,
          label: isRTL ? item.label_ar : item.label,
          label_ar: item.label_ar,
        };
      });
      setCity(cityData);
      setFilteredCity(cityData);
      const calculatedHeight = cityData.length * 92;
      setModalHeight(calculatedHeight);
      storeData('city', City);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error calling APddddI:', error);
    }
  };
  const openModalCity = () => {
    if (!selectedPOR) {
      return;
    }
    setModalCityVisible(true);
    city();
  };

  const handleValueChangeCity = value => {
    setSelectedCity(value.value);
    setcity(value.label);
  };

  const handleAgeChange = values => {
    setAgeRange(values);
  };

  const handleLengthChange = values => {
    setLength(values);
  };

  // const handleSonsChange = values => {
  //   setSons(values);
  // };

  const handleWeightChange = values => {
    setWeight(values);
  };
  const fetchData = async () => {
    try {
      const response = await GetApi(GET_USER_DATA_API);
      const userData = response?.user;
      storeData('FilterGender', userData.gender);
      setGender(userData.gender);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const Modalhandle = async filter_para => {
    setLoading(true);
    try {
      await fetchData();
      const gender = await getData('FilterGender');
      const response = await PostApi(FILTER_DATA_API, filter_para);

      if (response && response.users && Array.isArray(response.users)) {
        const MaleGender = response.users.filter(
          item => item.gender === 'Male',
        );
        const FemaleGender = response.users.filter(
          item => item.gender === 'Female',
        );
        const filteredData = gender == 'Male' ? FemaleGender : MaleGender;
        setUserData(filteredData.length > 0 ? filteredData : 'no-data');
      } else {
        setUserData('no-data');
      }

      setvisible(false);

      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setvisible(false);
    }
  };

  const filter_para = {
    min_age: min_age,
    max_age: max_age,
    min_length: min_length,
    max_length: max_length,
    min_weight: min_weight,
    max_weight: max_weight,
    // min_children: min_children,
    // max_children: max_children,
    city: cityy ? cityy : null,
    martial_status: maritialStatus,
    job: job,
    type_of_marriage: typeOfMarriage,
    type_of_hijab: typeOfHijab,
    nationality: Nationalityy ? Nationalityy : null,
    place_of_residence: porr ? porr : null,
  };

  useEffect(() => {
    setmin_age(String(ageRange[0]));
    setmax_age(String(ageRange[1]));
    setmin_length(String(length[0]));
    setmax_length(String(length[1]));
    setmin_weight(String(weight[0]));
    setmax_weight(String(weight[1]));
    // setmin_children(String(sons[0]));
    // setmax_children(String(sons[1]));
  }, [ageRange, weight, length, sons]);

  const handleUserCardPress = id => {
    const View_Profile_id = id;
    storeData('View_Profile_id', View_Profile_id);
    navigate(routeNames.VIEWPROFILE);
  };

  const search = async searchText => {
    try {
      const gender = await getData('FilterGender');
      const response = await PostApi(SEARCH_API + searchText);

      if (response && response.users && Array.isArray(response.users)) {
        const filteredData =
          gender === 'Male'
            ? response.users.filter(item => item.gender === 'Female')
            : response.users.filter(item => item.gender === 'Male');

        setUserData(filteredData);
      } else {
        setUserData([]);
      }

      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.log('Error searching:', error);
    }
  };

  useEffect(() => {
    if (searchText !== '') {
      search(searchText);
    } else {
      Modalhandle({});
    }
  }, [searchText]);

  const handleSearch = () => {
    search(searchText);
  };
  const handleChangeText = text => {
    setSearchText(text);
    search(setSearchText);
  };
  const handleClear = () => {
    Modalhandle({});
  };

  const handleJobFilterPress = title => {
    setJob(title === job ? null : title);
  };

  const handleMaritialStatusFilterPress = title => {
    setmaritialStatus(title === maritialStatus ? null : title);
  };
  const handleTypeOfMarriageFilterPress = title => {
    setTypeOfMarriage(title === typeOfMarriage ? null : title);
  };
  const handleTypeOfHijabFilterPress = title => {
    setTypeOfHijab(title === typeOfHijab ? null : title);
  };

  const searchFunction = (text, data, setFilteredData) => {
    setSearch(text);

    if (text) {
      const searchText = text.toUpperCase();

      const newData = data.filter(
        item =>
          (item.label && item.label.toUpperCase().includes(searchText)) ||
          (item.labelDisplay && item.labelDisplay.includes(text)) ||
          (item.label_ar && item.label_ar.includes(text)),
      );

      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <HomeHeader
          title="Peoples"
          RightIcon={'filter-circle-outline'}
          bigheader={true}
          // searchValue={searchText}
          onPressRightIcon={onPressRightIcon}
          onSearchPress={handleSearch}
          onChangeText={handleChangeText}
          onClearPress={handleClear}
        />
        {loading ? (
          <LoadingIndicator />
        ) : userData === 'no-data' ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.noDataContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <Text style={styles.noDataText}>{t('No data available.')}</Text>
          </ScrollView>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.user}>
              {userData &&
                Array.isArray(userData) &&
                userData.map(item => (
                  <UserCard
                    key={item.id}
                    Name={item?.name}
                    City={isRTL ? item.city_ar : item.city}
                    onPress={() => handleUserCardPress(item?.id)}
                    // isRTL ? city_ar : City
                  />
                ))}
            </View>
          </ScrollView>
        )}

        <ModalComponent
          showsVerticalScrollIndicator={false}
          isVisible={visible}
          closeIconModal={() => {
            setvisible(!visible);
          }}
          ModalButtontitle={'Done'}
          showModalButton={true}
          onPress={() => {
            Modalhandle(filter_para);
          }}
          modalheading={''}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SupportCard
              Name={'Nationality'}
              Information={Nationalityy ? Nationalityy : 'Select Nationality'}
              onPress={openModalNationality}
            />
            <SupportCard
              Name={'Place Of Residence'}
              Information={porr ? porr : 'Select Place of Residence'}
              onPress={openModalResidence}
            />
            <SupportCard
              Name={'City'}
              Information={cityy ? cityy : 'Select City'}
              onPress={openModalCity}
            />

            <ModalComponent
              SearchStyle={{
                height: modalHeight,
              }}
              isVisible={modalVisibleCity}
              searchbar={true}
              closeIconModal={() => {
                setModalCityVisible(false);
              }}
              placeholder={'Search city'}
              ModalButtontitle={'Done'}
              onChangeText={text => searchFunction(text, City, setFilteredCity)}
              onPress={() => setModalCityVisible(!modalVisibleCity)}
              modalheading={'City'}
              onSearchPress={text => searchFunction(searchText, text)}>
              <View style={styles.options}>
                <RadioButtonCompo
                  options={filteredCity}
                  onSelect={handleValueChangeCity}
                  initialValue={selectedCity}
                />
              </View>
            </ModalComponent>

            <ModalComponent
              SearchStyle={{
                height: '90%',
              }}
              isVisible={modalVisibleNationality}
              closeIconModal={() => {
                setModalNationalityVisible(false);
              }}
              placeholder={'Search nationality'}
              searchbar={true}
              onChangeText={text =>
                searchFunction(text, nation, setFilteredNationOption)
              }
              ModalButtontitle={'Done'}
              onPress={() => setModalNationalityVisible(false)}
              modalheading={'Nationality'}>
              <View style={styles.options}>
                <RadioButtonCompo
                  options={filteredNationOption}
                  onSelect={handleValueChangeNationality}
                  initialValue={selectedNationality}
                />
              </View>
            </ModalComponent>

            <ModalComponent
              SearchStyle={{
                height: '68%',
              }}
              isVisible={modalVisibleResidence}
              searchbar={true}
              onChangeText={text => searchFunction(text, POR, setFilteredPOR)}
              closeIconModal={() => setModalResidenceVisible(false)}
              ModalButtontitle={'Done'}
              placeholder={'Search  Place Of Residence'}
              onPress={() => setModalResidenceVisible(false)}
              modalheading={'Place Of Residence'}>
              <View style={styles.options}>
                <RadioButtonCompo
                  options={filteredPOR}
                  onSelect={handleValueChangePOR}
                  initialValue={selectedPOR}
                />
              </View>
            </ModalComponent>

            <Text style={styles.DataText}>{t('Job')}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FiterButtons
                title={'Government Department'}
                onPress={() => handleJobFilterPress('Government Department')}
                isSelected={job === 'Government Department'}
              />
              <FiterButtons
                title={'Private Sector'}
                onPress={() => handleJobFilterPress('Private Sector')}
                isSelected={job === 'Private Sector'}
              />
              <FiterButtons
                title={'Freelance'}
                onPress={() => handleJobFilterPress('Freelance')}
                isSelected={job === 'Freelance'}
              />
              <FiterButtons
                title={'Trade'}
                onPress={() => handleJobFilterPress('Trade')}
                isSelected={job === 'Trade'}
              />
            </ScrollView>

            <View style={styles.horizontalLine} />
            <Text style={styles.DataText}>{t('Marital Status')}</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <FiterButtons
                title={'Single'}
                onPress={() => handleMaritialStatusFilterPress('Single')}
                isSelected={maritialStatus === 'Single'}
              />
              <FiterButtons
                title={'Married'}
                onPress={() => handleMaritialStatusFilterPress('Married')}
                isSelected={maritialStatus === 'Married'}
              />
              <FiterButtons
                title={'Obesity'}
                onPress={() => handleMaritialStatusFilterPress('Obesity')}
                isSelected={maritialStatus === 'Obesity'}
              />
              <FiterButtons
                title={'Widowed'}
                onPress={() => handleMaritialStatusFilterPress('Widowed')}
                isSelected={maritialStatus === 'Widowed'}
              />
            </ScrollView>
            {gender === 'Male' && (
              <>
                <View style={styles.horizontalLine} />

                <Text style={styles.DataText}>{t('Type Of Marriage')}</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FiterButtons
                    title={'The only wife'}
                    onPress={() =>
                      handleTypeOfMarriageFilterPress('The only wife')
                    }
                    isSelected={typeOfMarriage === 'The only wife'}
                  />
                  <FiterButtons
                    title={'No objection of married person'}
                    onPress={() =>
                      handleTypeOfMarriageFilterPress(
                        'No objection of married person',
                      )
                    }
                    isSelected={
                      typeOfMarriage === 'No objection of married person'
                    }
                  />
                </ScrollView>

                <View style={styles.horizontalLine} />

                <Text style={styles.DataText}>{t('Type Of Hijab')}</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <FiterButtons
                    title={'Niqab'}
                    onPress={() => handleTypeOfHijabFilterPress('Niqab')}
                    isSelected={typeOfHijab === 'Niqab'}
                  />
                  <FiterButtons
                    title={'Covered face'}
                    onPress={() => handleTypeOfHijabFilterPress('Covered face')}
                    isSelected={typeOfHijab === 'Covered face'}
                  />
                  <FiterButtons
                    title={'Hijab & abaya shown face'}
                    onPress={() =>
                      handleTypeOfHijabFilterPress('Hijab & abaya shown face')
                    }
                    isSelected={typeOfHijab === 'Hijab & abaya shown face'}
                  />
                  <FiterButtons
                    title={'Only hijab'}
                    onPress={() => handleTypeOfHijabFilterPress('Only hijab')}
                    isSelected={typeOfHijab === 'Only hijab'}
                  />
                  <FiterButtons
                    title={'No hijab'}
                    onPress={() => handleTypeOfHijabFilterPress('No hijab')}
                    isSelected={typeOfHijab === 'No hijab'}
                  />
                </ScrollView>
              </>
            )}
            <View style={styles.horizontalLine} />
            <RangeSlider
              title={'Age'}
              values={ageRange}
              sliderLength={screenWidth * 0.8}
              min={0}
              max={100}
              step={1}
              onValuesChange={handleAgeChange}
              onChangeText1={text => setmin_age(text)}
              placeholder1={'min age'}
              placeholder2={'max age'}
              value1={min_age}
              value2={max_age}
              onChangeText2={text => setmax_age(text)}
            />
            <RangeSlider
              title={'Length'}
              values={length}
              sliderLength={screenWidth * 0.8}
              min={0}
              max={195}
              step={1}
              onValuesChange={handleLengthChange}
              onChangeText1={text => setmin_length(text)}
              placeholder1={'min length'}
              placeholder2={'max length'}
              value1={min_length}
              value2={max_length}
              onChangeText2={text => setmax_length(text)}
            />
            <RangeSlider
              title={'Weight'}
              values={weight}
              sliderLength={screenWidth * 0.8}
              min={0}
              max={200}
              step={1}
              onValuesChange={handleWeightChange}
              onChangeText1={text => setmin_weight(text)}
              placeholder1={'min weight'}
              placeholder2={'max weight'}
              value1={min_weight}
              value2={max_weight}
              onChangeText2={text => setmax_weight(text)}
            />
            {/* <RangeSlider
              title={'The sons'}
              values={sons}
              sliderLength={screenWidth * 0.8}
              min={0}
              max={50}
              step={1}
              onValuesChange={handleSonsChange}
              onChangeText1={text => setmin_children(text)}
              placeholder1={'min sons'}
              placeholder2={'max sons'}
              value1={min_children}
              value2={max_children}
              onChangeText2={text => setmax_children(text)}
            /> */}
          </ScrollView>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                // setModalButtonPressed(true);
                Modalhandle(filter_para);
              }}>
              <LinearGradient
                colors={['#FF6B5B', '#FC2F7A']}
                start={{x: 1, y: 0}}
                end={{x: 1, y: 1}}
                style={[styles.linearGradient, {width: screenWidth * 0.6}]}>
                <Text style={styles.buttonText}>{t('Apply')}</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.refreshButton, {width: screenWidth * 0.28}]}
              onPress={handleRefresh}>
              <Icon name="refresh" size={25} color={'black'} />
            </TouchableOpacity>
          </View>
        </ModalComponent>
      </View>
    </>
  );
};

export default People;
