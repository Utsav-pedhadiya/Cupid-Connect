import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log(key + ':', value);
    } catch (error) {
      console.error('Error saving ' + key + ' data:', error);
    }
  };

  const getData = async (key) => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (storedData !== null) {
        const data = JSON.parse(storedData);
        console.log('Stored ' + key + ':', data);
        return data;
      } else {
        console.log('No ' + key + ' stored');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving ' + key + ':', error);
      return null;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error('Error removing user data:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        console.log('storedUser', storedUser);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        saveData,
        getData,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
