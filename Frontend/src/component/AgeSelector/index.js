import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
  ScrollView,
  I18nManager,
} from 'react-native';
import {getData, storeData} from '../../Authcontext/Async';
import {useTranslation} from 'react-i18next';
import styles from './style';
import i18next from 'i18next';

const AgeSelector = ({setSelectedAge, handleAgeError, Agetitle}) => {
  const {t, i18n} = useTranslation();
  const [showAgePicker, setShowAgePicker] = useState(false);
  const [selectedAge, setSelectedAgeInternal] = useState(null);
  const screenWidth = Dimensions.get('window').width;
  const isRTL = i18next.language === 'ar';

  useEffect(() => {
    setSelectedAge(selectedAge);
  }, [selectedAge]);

  const handleConfirm = () => {
    setShowAgePicker(false);
    setSelectedAge(selectedAge);
    storeData('age', selectedAge);
    handleAgeError(false);
  };

  const renderAgeOptions = () => {
    const ages = [];
    for (let i = 18; i <= 100; i++) {
      ages.push(
        <TouchableOpacity
          key={i}
          onPress={() => setSelectedAgeInternal(i)}
          style={[
            styles.ageOptionButton,
            selectedAge === i && styles.selectedAgeOptionButton,
          ]}>
          <Text
            style={[
              styles.ageOptionText,
              selectedAge === i && styles.selectedAgeOptionText,
            ]}>
            {i}
          </Text>
        </TouchableOpacity>,
      );
    }
    return ages;
  };

  return (
    <View style={[styles.mainContainer]}>
      <TouchableOpacity onPress={() => setShowAgePicker(true)}>
        <View
          style={[
            styles.container,
            {
              width: screenWidth * 0.9,
              flexDirection: isRTL ? 'row-reverse' : 'row',
            },
          ]}>
          <Text style={[styles.text]}>
            {selectedAge ? selectedAge : Agetitle || t('Select Age')}
          </Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showAgePicker}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowAgePicker(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.ageOptionsContainer}>
                {renderAgeOptions()}
              </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleConfirm}>
                <Text style={styles.confirmButton}>{t('Confirm')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowAgePicker(false)}>
                <Text style={styles.cancelButton}>{t('Cancel')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AgeSelector;
