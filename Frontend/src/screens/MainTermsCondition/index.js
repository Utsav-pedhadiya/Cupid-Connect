import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SupportHeader from '../../component/SupportHeader';
import {TERMS_API} from '../../constants/Api';
import axios from 'axios';
import {getData} from '../../Authcontext/Async';
import { useAuth } from '../../Authcontext/AuthContext';
import { GetApi } from '../../services/postServices';

const MainTermsCondition = ({navigation}) => {
  const [termsAndConditions, setTermsAndConditions] = useState([]);
  const {logout} = useAuth();
  const handleIconPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const termsUpdate = async () => {
      try {
        const storedToken = await getData('Token');
        const response = await GetApi(TERMS_API);

        setTermsAndConditions(response.data);
        if (response instanceof Error) {
          if (response.response && response.response.status === 401) {
            logout();
          }
          throw response;
        }
      } catch (error) {
        console.error('Error updating Terms & Conditions:', error);
      }
    };

    termsUpdate();
  }, []);

  return (
    <View>
      <SupportHeader
        heading="Terms & Conditions"
        bigheader={true}
        onPressLeftIcon={handleIconPress}
        showHeadingText={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {termsAndConditions.map((term, index) => (
          <Text
            style={styles.termText}
            key={index}>{`${term.title}: ${term.content}`}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  termText: {
    fontSize: 16,
    lineHeight: 24,
    margin: 8,
    paddingHorizontal: 16,
    textAlign: 'justify',
    color: 'black',
    bottom: 10,
  },
});

export default MainTermsCondition;
