import {useState} from 'react';
import {Dimensions, View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import {TouchableOpacity} from 'react-native';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import ModalButton from '../../component/ModalButton';
import Button from '../../component/Button';

import InputText from '../../component/InputText';
import styles from './style';
import {HealthStatusOption} from './Data';
import {translateOptions} from '../../services/utils';

export const HealthStatusCompo = ({
  title,
  health,
  onSaveData,
  setSelecteHelth,
  selectedHelth,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [healthh, Sethealth] = useState('');

  const translatedHealthOptions = translateOptions(HealthStatusOption);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleUpdate = () => {
    onSaveData('health_status', healthh);
  };
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <TouchableOpacity onPress={openModal}>
          <InputText
            placeholder={selectedHelth || health}
            editable={false}
            rightIcon={true}
          />
        </TouchableOpacity>
        <ModalComponent
          isVisible={isOpen}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          onPress={() => {
            setSelecteHelth(healthh), closeModal();
          }}
          modalheading={'Health Status'}>
          <View style={styles.options}>
            <RadioButtonCompo
              options={translatedHealthOptions}
              initialValue={health}
              onSelect={value => {
                Sethealth(value.value);
              }}
            />
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
