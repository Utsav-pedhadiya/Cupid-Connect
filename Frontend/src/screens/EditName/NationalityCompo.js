import {TouchableOpacity, View, TextInput} from 'react-native';
import {getData, storeData} from '../../Authcontext/Async';
import HeadingText from '../../component/HeadingText';
import styles from './style';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import {useEffect, useState} from 'react';
import i18next from 'i18next';

export const NationalityCompo = ({
  title,
  nationality,
  nation,
  setSelectedNationality,
  onSaveData,
  selectedNationality,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredNation, setFilteredNation] = useState(nation);

  const isRTL = i18next.language === 'ar';
  const [Nationality, setNationality] = useState(nationality);
  const [nationalityPlaceholder, setNationalityPlaceholder] =
    useState(nationality);
  const [initialCountry, setInitialCountry] = useState(null);
  const [nationalityValue, setNationalityValue] = useState(null);

  const handleCountrySelection = country_id => {
    try {
      const selectedCountry = nation.find(nation => nation === country_id);
      setNationality(selectedCountry?.label);
      if (isRTL) {
        setNationality(selectedCountry?.labelDisplay);
        setNationalityPlaceholder(selectedCountry?.label_ar);
        storeData('nationality', selectedCountry?.labelDisplay);
        storeData('nationality_ar', selectedCountry?.label_ar);
      } else {
        setNationalityPlaceholder(selectedCountry?.label);
        setNationality(selectedCountry?.label);
        storeData('nationality', selectedCountry?.label);
        storeData('nationality_ar', selectedCountry?.label_ar);
      }
      // storeData('nationality_ar', selectedCountry?.label_ar);
      setNationalityValue(selectedCountry?.value);
    } catch (error) {
      console.error('Error handling country selection:', error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setSearchText('');
    setFilteredNation(nation);
    setIsOpen(true);
  };

  const searchFunction = text => {
    setSearchText(text);
    if (text) {
      const searchTextUpperCase = text.toUpperCase();
      const newFilteredNation = nation.filter(
        item =>
          item.label.toUpperCase().includes(searchTextUpperCase) ||
          item.labelDisplay.includes(text) ||
          item.label_ar.includes(text),
      );
      setFilteredNation(newFilteredNation);
    } else {
      setFilteredNation(nation);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const selectedCountryID = await getData(`selectedCountryID_${id}`);
      
      setInitialCountry(selectedCountryID);
    };
    fetchData();
  }, []);

  const handleUpdate = () => {
    onSaveData(
      'nationality',
      Nationality,
      storeData(`selectedCountryID_${id}`, nationalityValue),
      // storeData(`selectedCountryID`, nationalityValue),
      // storeData(`cityID_${userID}`, cityValue)
    );
  };

  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <TouchableOpacity onPress={openModal}>
          <View style={styles.inputstyle}>
            <InputText
              style={styles.input}
              placeholder={nationalityPlaceholder || selectedNationality}
              editable={false}
              rightIcon={true}
            />
          </View>
        </TouchableOpacity>
        <ModalComponent
          isVisible={isOpen}
          SearchStyle={{
            height: '90%',
          }}
          searchbar={true}
          onChangeText={searchFunction}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          placeholder={'Search nationality'}
          onPress={() => {
            setSelectedNationality(Nationality);
            closeModal();
          }}
          // searchValue={searchText}
          onSearchPress={() => searchFunction(searchText)}
          modalheading={'Nationality'}>
          <View style={styles.options}>
            <RadioButtonCompo
              initialValue={initialCountry}
              options={filteredNation}
              onSelect={handleCountrySelection}
            />
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
