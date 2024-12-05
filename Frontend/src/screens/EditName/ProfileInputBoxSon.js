import {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform,View} from 'react-native';
import HeadingText from '../../component/HeadingText';
import Button from '../../component/Button';
import styles from './style';
import InputText from '../../component/InputText';
export const ProfileInputBoxSon = ({title, value, onSaveData}) => {
  const [updateSonValue, setUpdateSonValue] = useState(value);

  useEffect(() => {
    setUpdateSonValue(value);
  }, [value]);
  const updateSon = text => {
    setUpdateSonValue(text);
  };
  const handleUpdate = () => {
    onSaveData('number_of_children', updateSonValue);
  };

  return (
    <KeyboardAvoidingView
    style={{flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    keyboardVerticalOffset={
        Platform.OS === 'ios' ? 150 : 0
      }>
      <View style={styles.heading}>
        <HeadingText title={title} />
        <View style={styles.inputstyle}>
          <InputText
            placeholder="Number of sons"
            value={updateSonValue}
            onChangeText={updateSon}
            keyboardType="numeric"
            maxLength={2}
            handleFocus={true}
            useStyle1={false}
            isFocused={true}
          />
        </View>
      </View>
      <Button title="Save Changes" onPress={handleUpdate} />
    </KeyboardAvoidingView>
  );
};
