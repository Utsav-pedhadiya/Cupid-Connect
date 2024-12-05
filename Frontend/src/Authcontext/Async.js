import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext} from 'react';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// store
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

// get
export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      const data = await JSON.parse(value);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

//removeItem
export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove item with key ${key}:`, error);
  }
};