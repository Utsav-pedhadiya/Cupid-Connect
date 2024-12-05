import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import ProfileHeader from '../../component/ProfileHeader';
import constant from '../../constants/constant';
import ProfileCard from '../../component/ProfileCard';
import {useAuth} from '../../Authcontext/AuthContext';
import routeNames from '../../constants/routeNames';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {GET_USER_DATA_API, LOGOUT_API} from '../../constants/Api';
import axios from 'axios';
import ConfirmationModal from '../../component/ConfirmationModal';
import {getData} from '../../Authcontext/Async';
import {GetApi, PostApi} from '../../services/postServices';

const Profile = ({navigation}) => {
  const {logout} = useAuth();
  const {navigate} = useNavigation();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [DeleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };
  const handleDelete = () => {
    setDeleteConfirmation(true);
  };

  const confirmLogout = async () => {
    try {
      const DeviceToken = await getData('device_token');
      const storedToken = await getData('Token');

      const response = await PostApi(
        LOGOUT_API,
        {device_token: DeviceToken},

      );
      logout(storedToken);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };
  const confirmDelete = async () => {
    navigate(routeNames.DELETEACCOUNT);
  };

  const cancelDelete = () => {
    setDeleteConfirmation(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const storedToken = await getData('Token');
      const response = await GetApi(GET_USER_DATA_API);
      setUserData(response.user);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetchingg data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );
  return (
    <View style={styles.container}>
      <ProfileHeader
        SIcon={constant.imagePath.biglogin}
        name={userData?.name || ''}
        monumber={userData?.number || ''}
        buttontitle={'Package History'}
        onPress={handleDelete}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileCard
          text={'Your Profile'}
          IconName={'person-outline'}
          onPress={() => {
            navigate(routeNames.PROFILEDETAILS);
          }}
        />
        {/* <ProfileCard
          text={'Langauge'}
          IconName={'language'}
          onPress={() => {
            navigate(routeNames.LANGAUGE);
          }}
        /> */}
        {/* <ProfileCard
          text={'Support'}
          IconName={'error-outline'}
          onPress={() => {
            navigate(routeNames.SUPPORT);
          }}
        /> */}
        <ProfileCard
          text={'Application Evaluate'}
          IconName={'star-border'}
          onPress={() => {
            navigate(routeNames.APPLICATIONEVALUATE);
          }}
        />
        <ProfileCard
          text={'Terms & Conditions'}
          IconName={'menu'}
          onPress={() => {
            navigate(routeNames.MAINTERMSCONDITION);
          }}
        />
        <ProfileCard
          text={'History'}
          IconName={'history'}
          onPress={() => {
            navigate(routeNames.HISTORY);
          }}
        />
        <ProfileCard
          text={'Logout'}
          IconName={'logout'}
          onPress={handleLogout}
        />
      </ScrollView>

      {showLogoutConfirmation && (
        <ConfirmationModal
          isVisible={showLogoutConfirmation}
          onConfirm={confirmLogout}
          onCancel={cancelLogout}
          title="Are you sure for logout?"
        />
      )}
      {DeleteConfirmation && (
        <ConfirmationModal
          isVisible={DeleteConfirmation}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          title="Do you want to delete your account?"
        />
      )}
    </View>
  );
};

export default Profile;
