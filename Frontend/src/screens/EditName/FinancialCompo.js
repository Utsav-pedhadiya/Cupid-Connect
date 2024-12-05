import {useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import {TouchableOpacity} from 'react-native';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import ModalButton from '../../component/ModalButton';
import Button from '../../component/Button';

import InputText from '../../component/InputText';
import styles from './style';
import {FinancialOption} from './Data';
import {translateOptions} from '../../services/utils';
export const FinancialCompo = ({
  title,
  onSaveData,
  financial,
  setSelecteFinancial,
  selectedFinancial,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [Financiall, SetFinancialTone] = useState(financial);

  const translatedFconditionOptions = translateOptions(FinancialOption);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const handleUpdate = () => {
    onSaveData('financial_situation', Financiall);
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
              placeholder={selectedFinancial || financial}
              editable={false}
            />
          </View>
        </TouchableOpacity>

        <ModalComponent
          isVisible={isOpen}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          onPress={() => {
            setSelecteFinancial(Financiall), closeModal();
          }}
          modalheading={'Financial situation'}>
          <View style={styles.options}>
            <RadioButtonCompo
              options={translatedFconditionOptions}
              initialValue={financial}
              onSelect={value => {
                SetFinancialTone(value.value);
              }}
            />
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
