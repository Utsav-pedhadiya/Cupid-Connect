import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, RefreshControl, Pressable} from 'react-native';
import styles from './style';
import HomeHeader from '../../component/HomeHeader';
import RequestContactCard from '../../component/RequestContactCard';
import ModalComponent from '../../component/Modal';
import {useFocusEffect} from '@react-navigation/native';
import RequestmodalHeadar from '../../component/RequestmodalHeadar'; // Corrected typo
import {GET_ALL_CONTACT} from '../../constants/Api';
import LoadingIndicator from '../../component/LoadingIndicator';
import {GetApi} from '../../services/postServices';
import {useTranslation} from 'react-i18next';
import {storeData} from '../../Authcontext/Async';
import i18next from 'i18next';
import { useAuth } from '../../Authcontext/AuthContext';

const RequestContact = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const {t} = useTranslation();
  const isRTL = i18next.language === 'ar';
  const [refreshing, setRefreshing] = useState(false);
  const {logout} = useAuth();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await GetApi(GET_ALL_CONTACT);
      setUserData(response.data || []);
      setModalVisible(false);
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
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <HomeHeader heading={t('Request Contact')} />
      {loading ? (
        <LoadingIndicator />
      ) : userData.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>{t('No data available.')}</Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <RequestContactCard
            iconName="rocket"
            name={userData.name}
            time={userData.date ? userData.date.split('T')[0] : ''}
            description={userData.note}
            onPress={openModal}
          />
          <ModalComponent
            isVisible={isOpen}
            closeIconModal={closeModal}
            ModalButtontitle={'Done'}
            onPress={() => {
              setModalVisible(modalVisible), closeModal();
            }}>
            <RequestmodalHeadar
              name={userData.name}
              SIcon={constant.imagePath.bigUser}
              buttonName={t('View Profile')}
              onClose={() => {setModalVisible(false), closeModal()}}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}>
              <Pressable>
                <View style={styles.horizontalLine} />
                <View
                  style={[
                    styles.row,
                    {flexDirection: isRTL ? 'row' : 'row-reverse'},
                  ]}>
                  <Text style={styles.title}>
                    {t('Phone Number Officials')}
                  </Text>
                  <Text style={styles.content}>{userData.number}</Text>
                </View>
                <View style={styles.horizontalLine} />
                <View
                  style={[
                    styles.row,
                    {flexDirection: isRTL ? 'row' : 'row-reverse'},
                  ]}>
                  <Text style={styles.title1}>{t('Note')}</Text>
                  <Text style={styles.content1}>{userData.note}</Text>
                </View>
              </Pressable>
            </ScrollView>
          </ModalComponent>
        </ScrollView>
      )}
    </View>
  );
};

export default RequestContact;
