import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {GetApi} from '../../services/postServices';
import {SUBSCRIPTION_HISTORY_API} from '../../constants/Api';
import Header from '../../component/Header';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {useAuth} from '../../Authcontext/AuthContext';
import styles from './style';

// Component definition
const SubscriptionHistory = ({navigation}) => {
  const [data, setData] = useState([]); // State to hold subscription data
  const {t} = useTranslation(); // Translation function
  const {logout} = useAuth(); // Auth context function for logout

  // Fetch subscription history data on component mount
  useEffect(() => {
    fetchUserHistoryData();
  }, []);

  // Function to fetch user subscription history
  const fetchUserHistoryData = async () => {
    try {
      const response = await GetApi(SUBSCRIPTION_HISTORY_API);
      setData(response.data || []); // Set data in state
      if (response instanceof Error) {
        if (response.response && response.response.status === 401) {
          logout(); // Logout on unauthorized response
        }
        throw response;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Check if language is RTL (Right-to-Left)
  const isRTL = i18next.language === 'ar';

  // Handle back button press
  const handleIconPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header onIconPress={handleIconPress} />

      {data.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            {t('No subscription history data available.')}
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          {data.map((item, index) => (
            <View
              key={index}
              style={[
                styles.subscriptionContainer,
                {
                  backgroundColor: item.subscriptions.color_code,
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                },
              ]}>
              <View style={styles.leftContent}>
                <Text style={styles.title}>{t('Profile ID')}: </Text>
                <Text style={styles.title}>{t('Status')}: </Text>
                <Text style={styles.title}>{t('Start Date')}: </Text>
                <Text style={styles.title}>{t('End Date')}: </Text>
                <Text style={styles.title}>{t('Renewal Date')}: </Text>
                <Text style={styles.title}>{t('Plan Name')}: </Text>
                <Text style={styles.title}>{t('Price')}: </Text>
                <Text style={styles.title}>{t('Months')}: </Text>
              </View>
              <View style={styles.rightContent}>
                <Text style={styles.text}>{item.profile_id}</Text>
                <Text style={styles.text}>{item.status}</Text>
                <Text style={styles.text}>{item.strt_date}</Text>
                <Text style={styles.text}>{item.end_date}</Text>
                <Text style={styles.text}>{item.renewal_date}</Text>
                <Text style={styles.text}>{item.subscriptions.plan_name}</Text>
                <Text style={styles.text}>{item.subscriptions.price}</Text>
                <Text style={styles.text}>{item.subscriptions.months}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default SubscriptionHistory;
