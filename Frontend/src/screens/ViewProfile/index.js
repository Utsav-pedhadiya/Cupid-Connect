import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert, Pressable} from 'react-native';
import styles from './style';
import SupportHeader from '../../component/SupportHeader';
import ViewProfileCard from '../../component/ViewProfileCard';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {REQUEST_BY_ID, SUB_CHECK, USER_BY_ID} from '../../constants/Api';
import LoadingIndicator from '../../component/LoadingIndicator';
import {getData} from '../../Authcontext/Async';
import ModalButton from '../../component/ModalButton';
import routeNames from '../../constants/routeNames';
import {GetApi, PostApi} from '../../services/postServices';
import i18next from 'i18next';
import {useAuth} from '../../Authcontext/AuthContext';

const ViewProfile = ({navigation}) => {
  const {navigate} = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();
  const {logout} = useAuth();
  const isRTL = i18next.language === 'ar';
  const handleIconPress = () => {
    navigation.goBack();
  };

  const RequestProfile = async () => {
    try {
      const storedToken = await getData('Token');
      const View_Profile_id = await getData('View_Profile_id');

      const response = await PostApi(REQUEST_BY_ID + View_Profile_id, null);

      if (response.message === 'You Already sent Request') {
        Alert.alert(
          'Request Already Sent',
          'You have already sent a request to this profile.',
        );
      }
      if (response.message === 'Contact Request Sent') {
        Alert.alert(
          'Contact Request Sent',
          'You have successfully sent a contact request.',
        );
      }
      const age = getData('age');
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRequest = async () => {
    try {
      const sub_id = await getData('sub_id');
      const response = await PostApi(SUB_CHECK, {
        subscription_id: sub_id,
      });
      if (response.code === '400') {
        RequestProfile();
      } else {
        navigate(routeNames.SUBSCRIPTION);
      }
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Subscription Response error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const storedToken = await getData('Token');
        const View_Profile_id = await getData('View_Profile_id');
    
        if (!View_Profile_id) {
          console.error('Error: View_Profile_id is missing');
          return;
        }
    
        const fullUrl = USER_BY_ID + View_Profile_id;
        console.log('Fetching data from:', fullUrl);
    
        const response = await GetApi(fullUrl);
        console.log('API Response:', response);
    
        setUserData(response?.user);
    
        if (response instanceof Error) {
          if (response.response?.status === 401) {
            logout();
          }
          throw response;
        }
      } catch (error) {
        console.error('Error fetching data:', error.response?.status, error.message);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <SupportHeader
        heading={userData?.name}
        bigheader={true}
        onPressLeftIcon={handleIconPress}
        RightIcon="filter-circle-outline"
        showLikeButton={true}
        showHeadingText={true}
      />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Pressable>
              <ViewProfileCard
                data={[
                  {
                    title: 'Name',
                    content: userData?.name || '',
                  },
                  {
                    title: 'About me',
                    content: userData?.write_about_yourself || '',
                  },
                ]}
              />
              <ViewProfileCard
                data={[
                  {
                    title: 'Recipes I look for',
                    content: userData?.qualities?.map(quality => quality?.quality_name) || '',
                  },
                  {
                    title: 'Hobbies',
                    content: userData?.interests || '',
                  },
                ]}
              />
              <ViewProfileCard
                data={[
                  {
                    title: 'Gender',
                    content: userData?.gender || '',
                  },
                 
                  {title: 'Age', content: userData?.age || ''},
                ]}
              />

              <ViewProfileCard
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
                    content: isRTL
                      ? userData?.city_ar || ''
                      : userData?.city || '',
                  },
                ]}
              />

              <ViewProfileCard
                data={[{title: 'Job', content: userData?.job || ''}]}
              />
              <ViewProfileCard
                data={[
                  {
                    title: 'Lineage',
                    content: userData?.lineage || '',
                  },
                ]}
              />
              <ViewProfileCard
                data={[
                  {
                    title: 'Skin Color',
                    content: userData?.skin_color || '',
                  },
                ]}
              />
              {userData?.gender === 'Female' && (
                <ViewProfileCard
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
                />
              )}

              <ViewProfileCard
                data={[
                  {
                    title: 'Marital Status',
                    content: userData?.martial_status || '',
                  },
                  {
                    title: 'Number of sons',
                    content: userData?.number_of_children || '',
                  },
                  {
                    title: 'Are the son with him',
                    content: userData?.are_the_children_with_you || '',
                  },
                ]}
              />
              <ViewProfileCard
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
              />
              <ViewProfileCard
                data={[
                  {
                    title: 'Height',
                    content: userData?.height || '',
                  },
                  {
                    title: 'Body Tone',
                    content: userData?.body_tone || '',
                  },
                  {
                    title: 'Health status',
                    content: userData?.health_status || '',
                  },
                ]}
              />
            </Pressable>
          </ScrollView>

          <ModalButton
            title={'Request to guardian contact'}
            onPress={handleRequest}
          />
        </>
      )}
    </View>
  );
};

export default ViewProfile;
