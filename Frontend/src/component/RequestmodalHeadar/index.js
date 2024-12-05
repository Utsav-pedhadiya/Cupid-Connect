import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../Authcontext/Async';
import routeNames from '../../constants/routeNames';
import {useTranslation} from 'react-i18next';

const RequestmodalHeadar = ({name, SIcon, buttonName, onClose}) => {
  const {navigate} = useNavigation();
  const {t, i18n} = useTranslation();

  const handleUserCardPress = async () => {
    // const viewProfileId = await getData('View_Profile_id');
    navigate(routeNames.VIEWPROFILE);
    onClose(); 
    
  };

  return (
    <View style={styles.container2}>
      <View style={styles.SColoum}>
        <Image source={SIcon} style={styles.image} />
        <Text style={styles.name}>{t(name)}</Text>
        <TouchableOpacity onPress={handleUserCardPress}>
          <Text style={styles.text}>{t(buttonName)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RequestmodalHeadar;
