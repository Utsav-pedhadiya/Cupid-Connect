import {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import {TouchableOpacity} from 'react-native';
import ModalComponent from '../../component/Modal';
import ModalButton from '../../component/ModalButton';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import styles from './style';
import CheckboxCompo from '../../component/Checkbox';
import {Hobbies, HobbiesOption} from './Data';
import {getData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import {translateOptions} from '../../services/utils';

export const HobbiesCompo = ({
  title,
  selectedHobbies,
  FormatedHobbies,
  setSelectedHobbies,
  onSaveData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hobbiesData, setHobbiesData] = useState(selectedHobbies);
  const [formatedHobbiesData, setFormatedHobbiesData] = useState('');
  const {t} = useTranslation();

  const translatedHobbiesOptions = translateOptions(HobbiesOption);
  useEffect(() => {
    const fetchData = async () => {
      const formatedhobbies = await getData('FormatedHobbiesWithDot');
      setFormatedHobbiesData(formatedhobbies);
      setHobbiesData(selectedHobbies);
    };
    fetchData();
  }, [FormatedHobbies, selectedHobbies]);

  const getInterestsPlaceholder = () => {
    if (hobbiesData.length === 0) {
      return t('Select hobbies');
    } else if (hobbiesData.length <= 2) {
      return hobbiesData.map(interest => t(interest)).join(', ');
    } else {
      const truncatedInterests = hobbiesData.slice(0, 2);
      return `${truncatedInterests.map(interest => t(interest)).join(', ')}...`;
    }
  };

  const handleValueHobbies = selectedValue => {
   
    const updatedSelectedHobbies = hobbiesData.filter(item => item !== '');
    const updatedSelectedInterests = updatedSelectedHobbies.includes(
      selectedValue,
    )
      ? updatedSelectedHobbies.filter(item => item !== selectedValue)
      : [...updatedSelectedHobbies, selectedValue];

    setHobbiesData(updatedSelectedInterests);
  };

  const getStatus = value => {
    return hobbiesData?.includes(value);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleUpdate = () => {
    onSaveData('interests', hobbiesData);
  };
  const Hobbies = HobbiesOption.map(item => {
    return {label: t(item.label), value: item.value};
  });
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <TouchableOpacity onPress={openModal}>
          <View style={styles.inputstyle}>
            <InputText
              style={styles.input}
              placeholder={getInterestsPlaceholder()}
              editable={false}
              rightIcon={true}
            />
          </View>
        </TouchableOpacity>
        <ModalComponent
          isVisible={isOpen}
          onPress={() => {
            setSelectedHobbies(hobbiesData), closeModal();
          }}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          modalheading={'Hobbies'}>
          <View style={styles.options}>
            {isOpen && Hobbies ? (
              <>
                <CheckboxCompo
                  // options={translatedHobbiesOptions}
                  options={HobbiesOption.map(hobby => ({
                    ...hobby,
                    label: t(hobby.label),
                  }))}
                  onSelect={handleValueHobbies}
                  status={getStatus}
                />
              </>
            ) : null}
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
