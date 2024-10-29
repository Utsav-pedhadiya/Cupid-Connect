import React, {useRef, useEffect} from 'react';
import {
  Modal,
  TouchableOpacity,
  Animated,
  Text,
  View,
} from 'react-native';
import styles from './style';
import SearchBar from 'react-native-dynamic-search-bar';
import Icon from 'react-native-vector-icons/Octicons';
import ModalButton from '../ModalButton';

const ModalComponent = ({
  isVisible,
  onClose,
  children,
  modalheading,
  searchbar,
}) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

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
      <View style={styles.container}>
        <Modal
          transparent
          animationType="slide"
          visible={isVisible}
          // onRequestClose={onClose}
        >
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            // onPress={onClose}
          >
            <Animated.View
              style={[styles.modalContainer, {transform: [{translateY}]}]}>
              <View style={styles.heading}>
                <Text style={styles.text}>{modalheading}</Text>
                <TouchableOpacity onPress={onClose}>
                  <Icon
                    name="x-circle-fill"
                    size={25}
                    color="#898989"
                    // style={styles.Icon}
                  />
                </TouchableOpacity>
              </View>
              {searchbar ? (
                <SearchBar
                  style={{
                    height: 44,
                    width: 360,
                    backgroundColor: '#EBEBEB',
                    top: 10,
                    marginBottom: 10,
                  }}
                  fontColor="#c6c6c6"
                  iconColor="#c6c6c6"
                  shadowColor="#282828"
                  backgroundColor="#EBEBEB"
                  placeholder="Search here"
                  showCancel={false}
                  onSearchPress={() => console.log('Search Icon is pressed')}
                />
              ) : null}

              {children}
              {/* <ModalButton title={'Done'} /> */}
              {/* <Image source={source} /> */}
              {/* <PrimaryText title={title} /> */}
            </Animated.View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
};

export default ModalComponent;
