import {Dimensions, TouchableOpacity, View, Text} from 'react-native';
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

export const PORCompo = ({
  title,
  Por = [],
  por,
  onSaveData,
  selectedPOR,
  setSelectedPOR,
  handleCity,
  id
}) => {
  const isRTL = i18next.language === 'ar';
  const [isOpen, setIsOpen] = useState(false);
  const [initialPor, setIinitialPor] = useState('');
  const [searchText, setSearchText] = useState('');
  const [porValue, setPorValue] = useState('');
  const [POR, setPorData] = useState(por || '');
  const [porPlaceholder, setPorPlaceholder] = useState(por || '');
  const [filteredPor, setFilteredPor] = useState(Por);

  const handleValueChangePOR = async state_id => {
    try {
      const selectedpor = Por.find(POR => POR === state_id);
      if (selectedpor) {
        if (isRTL) {
          setPorData(selectedpor.labelDisplay);
          setPorPlaceholder(selectedpor.label_ar);
          storeData('place_of_residence', selectedpor.labelDisplay);
          storeData('por_ar', selectedpor.label_ar);
        } else {
          setPorPlaceholder(selectedpor.label);
          setPorData(selectedpor.label);
          storeData('place_of_residence', selectedpor.label);
          storeData('por_ar', selectedpor.label_ar);
        }
        setPorValue(selectedpor.value);
        storeData('place_of_residence', selectedpor.value);
      } else {
        console.warn('Selected POR not found in the list.');
      }
    } catch (error) {
      console.error('Error handling country selection:', error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
    setSearchText('');
    setFilteredPor(Por);
  };

  const searchFunction = text => {
    setSearchText(text);
    if (text) {
      const searchTextUpperCase = text.toUpperCase();
      const newFilteredPor = Por.filter(
        item =>
          item.label.toUpperCase().includes(searchTextUpperCase) ||
          item.labelDisplay.includes(text) ||
          item.label_ar.includes(text),
      );
      setFilteredPor(newFilteredPor);
    } else {
      setFilteredPor(Por);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const selectedPorID = await getData(`selectedPorID_${id}`);
      setIinitialPor(selectedPorID);
    };
    fetchData();
  }, [id]);

  const handleUpdate = () => {
    onSaveData('place_of_residence', POR);
    storeData(`selectedPorID_${id}`, porValue);
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
              placeholder={porPlaceholder || selectedPOR}
              editable={false}
            />
          </View>
        </TouchableOpacity>

        <ModalComponent
          isVisible={isOpen}
          SearchStyle={{
            height: '68%',
          }}
          searchbar={true}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          onChangeText={searchFunction}
          placeholder={'Search  Place Of Residence'}
          onPress={() => {
            setSelectedPOR(POR), closeModal(), handleCity();
          }}
          onSearchPress={() => searchFunction(searchText)}
          modalheading={'Place of Residence'}>
          <View style={styles.options}>
            {filteredPor && filteredPor.length > 0 ? (
              <RadioButtonCompo
                options={filteredPor}
                initialValue={initialPor}
                onSelect={handleValueChangePOR}
              />
            ) : (
              <View><Text>No data available</Text></View>
            )}
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};