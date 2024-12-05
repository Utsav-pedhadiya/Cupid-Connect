import axios from 'axios';

import {REQUEST_ACCEPT_API} from '../constants/Api';
import {post, post2} from './api';
import {getData} from '../Authcontext/Async';
import NetInfo from '@react-native-community/netinfo';
import {Alert} from 'react-native';

//Login
export const admin = async params => {
  return post(LOGIN_API, params);
};
export const accept = async (params, id) => {
  return post(REQUEST_ACCEPT_API + id, params);
};

export const PostApi = async (apiUrl, requestData) => {
  try {
    const netInfoState = await NetInfo.fetch();
    if (!netInfoState.isConnected) {
      Alert.alert('No internet connection');
      return;
    } else {
      const storedNumber = await getData('Token');
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${storedNumber}`,
        },
      });
      return response.data;
    }
  } catch (error) {
    return error; 
  }
};


export const GetApi = async apiUrl => {
  try {
    const storedNumber = await getData('Token');
   
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${storedNumber}`,
      },
    });
    console.log('fgh',apiUrl);
    
    return response.data;
  } catch (error) {
    throw new Error(`Error calling API: ${error.message}`);
  }
};
