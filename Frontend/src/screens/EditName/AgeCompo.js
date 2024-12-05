import {useState} from 'react';
import {Dimensions, View} from 'react-native';
import AgeSelector from '../../component/AgeSelector';
import HeadingText from '../../component/HeadingText';
import Button from '../../component/Button';
import styles from './style';

export const AgeCompo = ({title, onSaveData, Agetitle, value}) => {
  const [selectedage, setSelectedage] = useState(value);
  const handleUpdate = () => {
    onSaveData('Age', selectedage);
  };

  return (
    <>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <AgeSelector
          setSelectedAge={setSelectedage}
          handleAgeError={() => {}}
          Agetitle={Agetitle}
        />
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </>
  );
};
