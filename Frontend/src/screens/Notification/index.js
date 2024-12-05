import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import styles from './style';
import HomeHeader from '../../component/HomeHeader';
import NotificationCard from '../../component/NotificationCard';
import routeNames from '../../constants/routeNames';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import constant from '../../constants/constant';
import TextArea from '../../component/TextArea';
import ModalComponent from '../../component/Modal';
import {useTranslation} from 'react-i18next';
import RequestmodalHeadar from '../../component/RequestmodalHeadar';
import {
  NOTIFICATION_API,
  REJECT,
  REQUEST_ACCEPT_API,
} from '../../constants/Api';
import { storeData } from '../../Authcontext/Async';
import LoadingIndicator from '../../component/LoadingIndicator';
import { GetApi, PostApi } from '../../services/postServices';
import i18next from 'i18next';
import FormattedTextInput from '../../component/FormattedTextInput';
import { useAuth } from '../../Authcontext/AuthContext';

const Notification = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visibleAccept, setVisibleAccept] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [note, setNote] = useState('');
  const [notificationData, setNotificationData] = useState([]);
  const [requestMsg, setRequestMsg] = useState('');
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [ReadData, setReadData] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [profileId, setProfileId] = useState('');
  const { logout } = useAuth();
  const isRTL = i18next.language === 'ar';

  const [mobileNumberError, setMobileNumberError] = useState('');
  const [noteError, setNoteError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await GetApi(NOTIFICATION_API);
      setNotificationData(response.notification || []);
      setReadData(
        response.notification.map(notification => notification.is_read),
      );
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => {
      setRefreshing(false);
    });
  }, []);

  const closeModal = () => {
    setVisibleAccept(false);
  };

  const validateInputs = () => {
    let valid = true;
    if (!mobileNumber) {
      setMobileNumberError('Please enter a phone number');
      valid = false;
    } else {
      setMobileNumberError('');
    }

    if (!note) {
      setNoteError('Please enter a note');
      valid = false;
    } else {
      setNoteError('');
    }

    return valid;
  };

  const acceptRequest = async requestId => {
    const formattedNumber = mobileNumber.replace(/-/g, '');

    try {
      const response = await PostApi(REQUEST_ACCEPT_API + requestId, {
        number: formattedNumber,
        note: note,
      });
      setRequestMsg(response.message);
      setReadData(response.message);
      setVisibleAccept(false);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const rejectRequest = async requestId => {
    try {
      const response = await PostApi(REJECT + requestId);
      fetchData();
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const handleInputChange = text => {
    const cleanedText = text.replace(/[^0-9]/g, '');
    let formattedText = '';
    for (let i = 0; i < cleanedText.length; i++) {
      if (i > 0 && i % 3 === 0) {
        formattedText += '-';
      }
      formattedText += cleanedText[i];
    }
    setMobileNumber(formattedText);
    setMobileNumberError(''); 
  };

  const handleNoteChange = text => {
    setNote(text);
    setNoteError(''); 
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
      setVisibleAccept(false);
    }, []),
  );

  return (
    <View style={styles.container}>
      <HomeHeader heading="Notifications" />

      {loading ? (
        <LoadingIndicator />
      ) : notificationData.length === 0 ? (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={styles.noDataText}>
            {t('No notification data available.')}
          </Text>
        </View>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            {notificationData.map((notification, index) => (
              <NotificationCard
                key={index}
                content={
                  notification.noti_type === 'profile_like'
                    ? 'liked your profile'
                    : notification.noti_type === 'profile_visit'
                      ? 'Viewed your profile'
                      : notification.noti_type === 'profile_contact_request' &&
                        notification.status === null
                        ? 'sent you request'
                        : notification.request_status === 'accepted'
                          ? 'you accepted request'
                          : notification.noti_type === 'contact_request_accepted'
                            ? 'Your request accepted'
                            : notification.noti_type === 'contact_request_rejected'
                              ? 'rejected your request'
                              : notification.noti_type === 'profile_contact_request' &&
                                notification.request_status === 'rejected'
                                ? 'you rejected request'
                                : undefined
                }
                Name={notification.noti_from.name}
                Time={notification.time ? notification.time.split('T')[0] : ''}
                Iconename={
                  notification.noti_type === 'profile_like'
                    ? 'like2'
                    : notification.noti_type === 'profile_visit'
                      ? 'eyeo'
                      : notification.noti_type === 'profile_contact_request'
                        ? 'message1'
                        : notification.noti_type === 'contact_request_accepted'
                          ? 'message1'
                          : notification.noti_type === 'contact_request_rejected'
                            ? 'message1'
                            : undefined
                }
                onPressProfile={() => {
                  setVisibleProfile(true);
                  const View_Profile_id = notification.noti_from.id;
                  setProfileId(View_Profile_id);
                  storeData('View_Profile_id', View_Profile_id);
                  navigate(routeNames.VIEWPROFILE);
                }}
                onPressAccept={() => {
                  setVisibleAccept(true);
                  setClickedIndex(index);
                }}
                onPressReject={() => {
                  const requestId = notification.request_id;
                  rejectRequest(requestId);
                  setClickedIndex(index);
                }}
                notiType={{
                  type: notification.noti_type,
                  status: notification.request_status,
                }}
                is_read={ReadData}
                acceptmessagee={requestMsg}
              />
            ))}
          </ScrollView>
        </>
      )}

      <ModalComponent
        isVisible={visibleAccept}
        closeIconModal={() => {
          setVisibleAccept(false);
        }}
        onPress={() => {
          if (validateInputs()) {
            const requestId = notificationData[clickedIndex].request_id;
            acceptRequest(requestId);
            closeModal();
          }
        }}
        ModalButtontitle={'Accept Request'}
        modalheading={'Accept Request'}>
        <RequestmodalHeadar
          name={notificationData[clickedIndex]?.noti_from?.name || 'Unknown'}
          SIcon={constant.imagePath.bigUser}
          buttonName={'View Profile'}
          onClose={() => {
            storeData(
              'View_Profile_id',
              notificationData[clickedIndex].noti_from.id,
            ),
              closeModal();
          }}
        />
        <View style={styles.horizontalLine} />

        <Text style={[styles.text2]}>{t('Phone Number Officials')}</Text>
        <View style={[styles.note]}>
          <FormattedTextInput
            value={mobileNumber}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            maxLength={9}
            autoFocus
            LeftIcon={'phone'}
            placeholder="000-000-000"
            placeholderTextColor={constant.colors.placeholder}
            placeholderFontSize={constant.FontSize.secondaryText}
            showIcon={true}
          />
          {mobileNumberError ? (
            <Text style={{ color: 'red' , textAlign: isRTL ? 'right' : 'left'}}>{t(mobileNumberError)}</Text>
          ) : null}
        </View>
        <Text style={styles.text2}>{t('Note')}</Text>
        <View style={styles.note2}>
          <TextArea
            placeholder="Note"
            textAreaQualitiesStyle={true}
            placeholderTextleft={true}
            value={note}
            onChangeText={handleNoteChange}
          />
          {noteError ? (
            <Text style={{ color: 'red' , textAlign: isRTL ? 'right' : 'left'}}>{t(noteError)}</Text>
          ) : null}
        </View>
      </ModalComponent>
    </View>
  );
};

export default Notification;
