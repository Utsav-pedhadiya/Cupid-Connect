  import React, {createContext, useContext, useEffect, useState} from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {getData, storeData} from './Async';

  const AuthContext = createContext();

  export const useAuth = () => useContext(AuthContext);

  export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // login
    const login = async Token => {
      try {
        setLoading(true);
        await storeData('Token', Token);
        setUser(Token);
      } catch (error) {
        console.error('Error saving user data:', error);
      } finally {
        setLoading(false);
      }
    };

    //logout
    const logout = async () => {
      try {
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('Token');
        setUser(null);
      } catch (error) {
        console.error('Error removing user data:', error);
      }
    };

    // delete
    const Delete = async () => {
      try {
        await AsyncStorage.removeItem('Token');
        await AsyncStorage.removeItem('number');
        await AsyncStorage.removeItem('user');
        
        setUser('');
      } catch (error) {
        console.error('Error removing user data:', error);
      }
    };

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const storedUser = await getData('Token');
        
          if (storedUser) {
            setUser(storedUser);
          }
        } catch (error) {
          console.error('Error retrieving user data:', error);
        }
      };

      fetchUserData();
    }, []);
    // const storedUser = await AsyncStorage.clear();
    // await AsyncStorage.removeItem('Token');

    return (
      <AuthContext.Provider
        value={{
          login,
          logout,
          loading,
          Delete,
          user,
        }}>
        {children}
      </AuthContext.Provider>
    );
  };
