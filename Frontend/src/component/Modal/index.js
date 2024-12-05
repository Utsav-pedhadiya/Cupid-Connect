import React, {useRef, useEffect} from 'react';
import {
  Modal,
  TouchableOpacity,
  Animated,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Octicons';
import {useTranslation} from 'react-i18next';
import ModalButton from '../ModalButton';
import Searchbar from '../Searchbar';

const ModalComponent = ({
  isVisible,
  closeIconModal,
  children,
  modalheading,
  searchbar,
  placeholder,
  value,
  ModalButtontitle,
  showModalButton,
  onChangeText,
  onSearchPress,
  onPress,
  searchValue,
  SearchStyle,
}) => {
  const {t} = useTranslation();
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;
  useEffect(() => {
    if (isVisible) {
      showAnimation();
    } else {
      hideAnimation();
    }
  }, [isVisible]);

  const showAnimation = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const hideAnimation = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  });
  return (
    <>
      <View style={[styles.container]}>
        <Modal transparent animationType="slide" visible={isVisible}>
          <View style={styles.overlay}>
            <Animated.View
              style={[
                styles.modalContainer,
                SearchStyle,
                {transform: [{translateY}]},
              ]}>
              <View style={[styles.heading]}>
                <Text
                  style={[
                    styles.text,
                    {
                      marginHorizontal: screenWidth * 0.03,
                    },
                  ]}>
                  {t(modalheading)}
                </Text>
                <TouchableOpacity onPress={closeIconModal}>
                  <Icon name="x-circle-fill" size={25} color="#898989" />
                </TouchableOpacity>
              </View>
              {searchbar ? (
                <Searchbar
                  placeholder={placeholder}
                  value={searchValue}
                  onChangeText={onChangeText}
                  onSearch={onSearchPress}
                />
              ) : null}
              <ScrollView style={{maxHeight: '100%'}} >{children}</ScrollView>
              {showModalButton ? null : (
                <ModalButton title={ModalButtontitle} onPress={onPress} />
              )}
            </Animated.View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default ModalComponent;
