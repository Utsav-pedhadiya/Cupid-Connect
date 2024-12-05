import {useEffect, useState} from 'react';
import {KeyboardAvoidingView, Text, Platform,View} from 'react-native';
import styles from './style';
import TextArea from '../../component/TextArea';
import Button from '../../component/Button';
import {useTranslation} from 'react-i18next';
import HeadingText from '../../component/HeadingText';
import {getData} from '../../Authcontext/Async';

export const ProfileInputBoxRecipes = ({title, value, onSaveData}) => {
  const {t} = useTranslation();

  const [qualitiesError, setQualitiesError] = useState('');

  const [Qualities, setQualities] = useState(
    Array.isArray(value) ? value.join(', ') : value,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const qualities = await getData('Quality');

        setQualities(
          Array.isArray(qualities) ? qualities.join(', ') : qualities,
        );
      } catch (error) {
        console.error('Error fetching profile details:', error);
      }
    };
    fetchData();
  }, []);

  const handleQualityChange = text => {
    setQualities(text);
    setQualitiesError('');
    if (text.length >= 250) {
      setQualitiesError('Please limit to 250 characters or less');
    }
  };

  const handleUpdate = () => {
    onSaveData('Qualities', Qualities);
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
          <TextArea
            placeholder="Recipes I look for"
            value={Qualities}
            onChangeText={handleQualityChange}
            maxLength={250}
          />
          <Text style={styles.errorText}>{t(qualitiesError)}</Text>
        </View>
      </View>
      <Button title="Save Changes" onPress={handleUpdate}  disabled={!Qualities}/>
    </KeyboardAvoidingView>
  );
};
