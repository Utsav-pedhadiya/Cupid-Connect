import {useState} from 'react';
import {ScrollView, View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import {TouchableOpacity} from 'react-native';
import ModalComponent from '../../component/Modal';
import RadioButtonCompo from '../../component/Radiobutton';
import Button from '../../component/Button';

import InputText from '../../component/InputText';
import styles from './style';
import {Job} from './Data';

import {translateOptions} from '../../services/utils';
export const JobCompo = ({
  title,
  job,
  setSelecteJob,
  onSaveData,
  selectedJob,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobb, Setjob] = useState(job);

  const translatedJobOptions = translateOptions(Job);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleUpdate = () => {
    onSaveData('job', jobb);
  };
  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <TouchableOpacity onPress={openModal}>
          <InputText
            placeholder={selectedJob || job}
            editable={false}
            rightIcon={true}
          />
        </TouchableOpacity>
        <ModalComponent
          isVisible={isOpen}
          closeIconModal={closeModal}
          ModalButtontitle={'Done'}
          onPress={() => {
            setSelecteJob(jobb), closeModal();
          }}
          modalheading={'Job'}>
          <View style={styles.options}>
            <ScrollView>
              <RadioButtonCompo
                options={translatedJobOptions}
                initialValue={jobb || job}
                onSelect={value => Setjob(value.value)}
              />
            </ScrollView>
          </View>
        </ModalComponent>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
