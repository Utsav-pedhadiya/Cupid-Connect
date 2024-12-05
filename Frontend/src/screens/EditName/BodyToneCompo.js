import {useState} from 'react';
import {Dimensions, View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import {TouchableOpacity} from 'react-native';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import styles from './style';
import {BodyToneOption} from './Data';
import {translateOptions} from '../../services/utils';

export const BodyToneCompo = ({
  title,
  body,
  onSaveData,
  selectedBody,
  setSelecteBody,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bodyy, SetBodyTone] = useState(body);

  const translatedBodyToneOptions = translateOptions(BodyToneOption);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const handleUpdate = () => {
    onSaveData('body_tone', bodyy);
  };

  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <TouchableOpacity onPress={openModal}>
          <InputText
            placeholder={selectedBody || body}
            editable={false}
            rightIcon={true}
          />
        </TouchableOpacity>
        <ModalComponent
          isVisible={isOpen}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          onPress={() => {
            setSelecteBody(bodyy), closeModal();
          }}
          modalheading={'Body Tone'}>
          <View style={styles.options}>
            <RadioButtonCompo
              options={translatedBodyToneOptions}
              initialValue={body}
              onSelect={value => SetBodyTone(value.value)}
            />
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
