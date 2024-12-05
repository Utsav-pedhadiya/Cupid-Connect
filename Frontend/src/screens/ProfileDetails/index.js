import React, {useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import styles from './style';
import SupportHeader from '../../component/SupportHeader';
import EditProfileCard from '../../component/EditProfileCard';
import routeNames from '../../constants/routeNames';
import {GET_USER_DATA_API} from '../../constants/Api';
import LoadingIndicator from '../../component/LoadingIndicator';
import {getData, storeData} from '../../Authcontext/Async';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';
import {GetApi} from '../../services/postServices';
import {useAuth} from '../../Authcontext/AuthContext';

const ProfileDetails = ({navigation}) => {
  const {navigate} = useNavigation();
  const {t} = useTranslation();
  const [userData, setUserData] = useState(null);
  const [Hobbies, setHobbies] = useState('');
  const [Qualities, setQualities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const {logout} = useAuth();
  const isRTL = i18next.language === 'ar';

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const handleIconPress = () => {
    navigation.goBack();
  };

  const handleProfileEdit = item => {
    if (
      item.title === 'Name' ||
      item.title === 'About me' ||
      item.title === 'Hobbies' ||
      item.title === 'Gender' ||
      item.title === 'Nationality' ||
      item.title === 'Place Of Residence' ||
      item.title === 'City' ||
      item.title === 'Job' ||
      item.title === 'Type Of Marriage' ||
      item.title === 'Type Of Hijab' ||
      item.title === 'Lineage' ||
      item.title === 'Religious Commitment' ||
      item.title === 'Skin Color' ||
      item.title === 'Marital Status' ||
      item.title === 'Number of sons' ||
      item.title === 'Financial situation' ||
      item.title === 'Body Tone' ||
      item.title === 'Height' ||
      item.title === 'Recipes I look for' ||
      item.title === 'Age' ||
      item.title === 'Are the son with him' ||
      item.title === 'Number of sons' ||
      item.title === 'Health status'
    ) {
      navigate(routeNames.EDITNAME, {title: item.title});
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const storedToken = await getData('Token');
      const response = await GetApi(GET_USER_DATA_API);

      const userData = response?.user;
      setUserData(userData);

      const qualities =
        userData?.qualities?.map(quality => quality?.quality_name) || [];
      setQualities(qualities);
      storeData('Quality', qualities);

      const hobbiesArray = userData?.interests || [];
      const hobbiesArrayInArabic = hobbiesArray.map(hobby => t(hobby));

      const hobbiesString = hobbiesArray.join(', ');

      setHobbies(hobbiesArrayInArabic);
      storeData('FormatedHobbiesWithDot', hobbiesString);

      if (hobbiesArrayInArabic.length >= 2) {
        // const selectedHobbies = hobbiesArrayInArabic.slice(0, 3);
        // const formattedHobbies = `${selectedHobbies.join(' ,')}...`;
        const selectedHobbies = hobbiesArrayInArabic;
        const formattedHobbies = `${selectedHobbies.join(' ,')}`;
        setHobbies(formattedHobbies);
        storeData('FormatedHobbiesWithDot', formattedHobbies);
      }
      storeData('profile_Details', userData);
      storeData('Profile_ID', userData.id);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <SupportHeader
        heading="Your Profile"
        bigheader={true}
        onPressLeftIcon={handleIconPress}
        showHeadingText={true}
      />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <EditProfileCard
            data={[
              {title: 'Name', content: userData?.name || ''},
              {
                title: 'About me',
                content: userData?.write_about_yourself || '',
              },
            ]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[
              {
                title: 'Recipes I look for',
                content: Qualities.join(', ') || '',
              },
              {
                title: 'Hobbies',
                content: Hobbies || 'Select Hobbies',
              },
            ]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[
              {title: 'Gender', content: userData?.gender || ''},
              {title: 'Age', content: userData?.age || ''},
            ]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[
              {
                title: 'Nationality',
                content: isRTL
                  ? userData?.nationality_ar || ''
                  : userData?.nationality || '',
              },
              {
                title: 'Place Of Residence',
                content: isRTL
                  ? userData?.por_ar || ''
                  : userData?.place_of_residence || '',
              },
              {
                title: 'City',
                content: isRTL ? userData?.city_ar || '' : userData?.city || '',
              },
            ]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[{title: 'Job', content: userData?.job || ''}]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[{title: 'Lineage', content: userData?.lineage || ''}]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[{title: 'Skin Color', content: userData?.skin_color || ''}]}
            onPress={handleProfileEdit}
          />
          {userData?.gender === 'Female' && (
            <EditProfileCard
              data={[
                {
                  title: 'Type Of Marriage',
                  content: userData?.type_of_marriage || '',
                },
                {
                  title: 'Type Of Hijab',
                  content: userData?.type_of_hijab || '',
                },
              ]}
              onPress={handleProfileEdit}
            />
          )}
          <EditProfileCard
            data={[
              {
                title: 'Marital Status',
                content: userData?.martial_status || '',
              },
              {
                title: 'Number of sons',
                content: userData?.number_of_children || '',
              },
            ]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[
              {
                title: 'Religious Commitment',
                content: userData?.religious_commitment || '',
              },
              {
                title: 'Financial situation',
                content: userData?.financial_situation || '',
              },
            ]}
            onPress={handleProfileEdit}
          />
          <EditProfileCard
            data={[
              {title: 'Height', content: userData?.height || ''},
              {title: 'Body Tone', content: userData?.body_tone || ''},
              {title: 'Health status', content: userData?.health_status || ''},
            ]}
            onPress={handleProfileEdit}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default ProfileDetails;
