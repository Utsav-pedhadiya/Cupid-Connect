import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import axios from 'axios';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HistoryCard from '../../component/HistoryCard';
import {getData} from '../../Authcontext/Async';
import {HISTORY_LIST, HISTORY_WHOME} from '../../constants/Api';
import SupportHeader from '../../component/SupportHeader';
import LoadingIndicator from '../../component/LoadingIndicator';
import styles from './style';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../Authcontext/AuthContext';
import {GetApi} from '../../services/postServices';

const Tab = createMaterialTopTabNavigator();

const VisitedScreen = ({refreshData}) => {
  const {logout} = useAuth();
  const {t} = useTranslation();
  const [historyData, setHistoryData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noDataAvailable, setNoDataAvailable] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshData(setHistoryData);
  }, []);

  useEffect(() => {
    const fetchHistoryData = async () => {
      setLoading(true);
      try {
        const storedToken = await getData('Token');
        const response = await GetApi(HISTORY_LIST);
        setHistoryData(response.history);
        if (!response || !response.history || response.history.length === 0) {
          setNoDataAvailable(true);
        } else {
          setHistoryData(response.history);
        }
        if (response instanceof Error) {
          if (response.response && response.response.status === 401) {
            logout();
          }
          throw response;
        }
      } catch (error) {
        console.error('Error fetching history data:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };
    fetchHistoryData();
  }, [refreshing]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <LoadingIndicator />
      ) : noDataAvailable ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            {t('No history data available.')}
          </Text>
        </View>
      ) : (
        <>
          {historyData.map((item, index) => (
            <HistoryCard
              key={index}
              Iconename={
                item.history_type === 'profile_like'
                  ? 'like2'
                  : item.history_type === 'profile_visit'
                  ? 'eyeo'
                  : item.history_type === 'profile_contact_request'
                  ? 'message1'
                  : item.history_type === 'contact_request_accepted'
                  ? 'message1'
                  : item.history_type === 'contact_request_rejected'
                  ? 'message1'
                  : undefined
              }
              Name={item.history_data.name}
              content={
                item.history_type === 'profile_like'
                  ? `Your profile is liked`
                  : item.history_type === 'profile_visit'
                  ? `Your profile is viewed`
                  : item.history_type === 'profile_contact_request'
                  ? `Your request is sent`
                  : item.history_type === 'contact_request_accepted'
                  ? `Your request is accepted`
                  : item.history_type === 'contact_request_rejected'
                  ? `Your request is rejected`
                  : undefined
              }
            />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const LikedScreen = ({refreshData}) => {
  const {t} = useTranslation();
  const {logout} = useAuth();
  const [whomHistoryData, setWhomHistoryData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [noDataAvailable, setNoDataAvailable] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refreshData(setWhomHistoryData);
  }, []);

  useEffect(() => {
    const fetchHistoryData = async () => {
      setLoading(true);
      try {
        const storedToken = await getData('Token');
        const response = await GetApi(HISTORY_WHOME);
        setWhomHistoryData(response.whome);
        if (!response || !response.whome || response.whome.length === 0) {
          setNoDataAvailable(true);
        } else {
          setWhomHistoryData(response.whome);
        }
        if (response instanceof Error) {
          if (response.response && response.response.status === 401) {
            logout();
          }
          throw response;
        }
      } catch (error) {
        console.error('Error fetching whom history data:', error);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    };

    fetchHistoryData();
  }, [refreshing]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {loading ? (
        <LoadingIndicator />
      ) : noDataAvailable ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            {t('No history data available.')}
          </Text>
        </View>
      ) : (
        <>
          {whomHistoryData.map((item, index) => (
            <HistoryCard
              key={index}
              Iconename={
                item.type === 'profile_like'
                  ? 'like2'
                  : item.type === 'profile_visit'
                  ? 'eyeo'
                  : item.type === 'profile_contact_request'
                  ? 'message1'
                  : item.type === 'contact_request_accepted'
                  ? 'message1'
                  : item.type === 'contact_request_rejected'
                  ? 'message1'
                  : undefined
              }
              Name={item.data.name}
              content={
                item.type === 'profile_contact_request'
                  ? `You viewed profile`
                  : item.type === 'profile_visit'
                  ? `You visited profile`
                  : item.type === 'contact_request_accepted'
                  ? `You accepted request`
                  : item.type === 'contact_request_rejected'
                  ? `You rejected request`
                  : item.type === 'profile_like'
                  ? `You liked profile`
                  : undefined
              }
            />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const History = ({navigation}) => {
  const {logout} = useAuth();
  const {t} = useTranslation();
  const handalback = () => {
    navigation.goBack();
  };

  const refreshVisitedData = async setHistoryData => {
    try {
      const storedToken = await getData('Token');
      const response = await GetApi(HISTORY_LIST);
      setHistoryData(response.history);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  const refreshLikedData = async setWhomHistoryData => {
    try {
      const storedToken = await getData('Token');
      const response = await GetApi(HISTORY_WHOME);
      setWhomHistoryData(response.whome);
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout();
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching whom history data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <SupportHeader
        heading="History"
        bigheader={true}
        onPressLeftIcon={handalback}
        showHeadingText={true}
      />
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: '#FC3876'},
        }}>
        <Tab.Screen name={t('Whome')}>
          {() => <VisitedScreen refreshData={refreshVisitedData} />}
        </Tab.Screen>
        <Tab.Screen name={t('You')}>
          {() => <LikedScreen refreshData={refreshLikedData} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default History;
