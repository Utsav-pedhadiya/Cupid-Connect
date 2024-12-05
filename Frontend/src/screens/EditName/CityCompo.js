import {Dimensions, TouchableOpacity, View} from 'react-native';
import {getData, storeData} from '../../Authcontext/Async';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import ModalComponent from '../../component/Modal';
import ModalButton from '../../component/ModalButton';
import RadioButtonCompo from '../../component/Radiobutton';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import {useEffect, useState} from 'react';
import i18next from 'i18next';

export const CityCompo = ({
  title,
  setSelectedCity,
  City,
  city,
  onSaveData,
  selectedCity,
  id,
}) => {
  const isRTL = i18next.language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [CityData, setCityData] = useState(city);
  const [cityPlaceholder, setCityPlaceholder] = useState(city || '');
  const [initialCity, setInitialCity] = useState('');
  const [searchText, setSearchText] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [filteredCity, setFilteredCity] = useState(City);
  const [modalHeight, setModalHeight] = useState('auto');

  const handleChangeCity = value => {
    try {
      const selectedCity = City.find(item => item === value);
      setCityData(selectedCity?.label);
      if (isRTL) {
        setCityData(selectedCity?.labelDisplay);
        setCityPlaceholder(selectedCity?.label_ar);
        storeData('city', selectedCity?.labelDisplay);
        storeData('city_ar', selectedCity?.label_ar);
      } else {
        setCityPlaceholder(selectedCity?.label);
        setCityData(selectedCity?.label);
        storeData('city', selectedCity?.label);
        storeData('city_ar', selectedCity?.label_ar);
      }
      storeData('city_ar', selectedCity?.label_ar);
      setCityValue(selectedCity?.value);
    } catch (error) {
      console.error('Error handling city selection:', error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
    setSearchText('');
    setFilteredCity(City);

    const initialHeight = City.length * 92;
    const maxHeight = Dimensions.get('window').height;
    setModalHeight(Math.min(initialHeight, maxHeight));
  };

  const searchFunction = text => {
    setSearchText(text);
    if (text) {
      const searchTextUpperCase = text.toUpperCase();
      const newFilteredCity = City.filter(
        item =>
          item.label.toUpperCase().includes(searchTextUpperCase) ||
          item.labelDisplay.includes(text) ||
          item.label_ar.includes(text),
      );
      setFilteredCity(newFilteredCity);
    } else {
      setFilteredCity(City);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const cityID = await getData(`cityID_${id}`);
      setInitialCity(cityID);
    };
    fetchData();
  }, []);

  const handleUpdate = () => {
    onSaveData('city', CityData, storeData(`cityID_${id}`, cityValue));
  };

  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <TouchableOpacity onPress={openModal}>
          <View style={styles.inputstyle}>
            <InputText
              style={styles.input}
              rightIcon={true}
              placeholder={cityPlaceholder || selectedCity}
              editable={false}
            />
          </View>
        </TouchableOpacity>

        <ModalComponent
          SearchStyle={{
            height: modalHeight,
          }}
          searchbar={true}
          isVisible={isOpen}
          closeIconModal={closeModal}
          placeholder={'Search city'}
          ModalButtontitle={'Done'}
          onChangeText={searchFunction}
          onPress={() => {
            setSelectedCity(CityData), closeModal();
          }}
          onSearchPress={() => searchFunction(searchText)}
          modalheading={'City'}>
          <View style={[styles.options, {flex: 1}]}>
            <RadioButtonCompo
              options={filteredCity}
              initialValue={initialCity}
              onSelect={handleChangeCity}
              style={{flex: 1}}
            />
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
