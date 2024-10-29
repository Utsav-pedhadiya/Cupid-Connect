import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import ProfileButton from '../ProfileButton';
import {Modal} from 'react-native';
import constant from '../../constants/constant';
import routeNames from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Octicons';
import ConfirmationModal from '../ConfirmationModal';

const ProfileHeader = ({name, buttontitle, monumber, modalStyle}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const {navigate} = useNavigation();
  const model = () => {
    showDeleteConfirmation(!setShowDeleteConfirmation);
  };
  const confirmDelete = async () => {
    navigate(routeNames.DELETEACCOUNT);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const newStyle = modalStyle ? styles.modalStyle : null;
  return (
    <View style={[styles.container2, newStyle]}>
      <View style={styles.fColoum}>
        <TouchableOpacity onPress={model}>
          <Icon
            name="dots-three-vertical"
            size={25}
            color="black"
            style={styles.Icon}
          />
        </TouchableOpacity>
      </View>

      {showDeleteConfirmation && (
        <ConfirmationModal
          ModalTitle={'Are you sure you want to delete this account?'}
          isVisible={showDeleteConfirmation}
          confirm={confirmDelete}
          cancel={cancelDelete}
        />
      )}

      <View style={styles.SColoum}>
        <Icon3
          name="user-circle-o"
          size={90}
          color="#3B3B3B"
          style={styles.Simage}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.moNumber}>{monumber}</Text>
        <ProfileButton
          text={buttontitle}
          source={constant.imagePath.rightRedArrow}
          onPress={() => {
            navigate(routeNames.SUBSCRIPTION);
          }}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
