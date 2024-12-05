import {useState} from 'react';
import {FILTER_DATA_API, GET_USER_DATA_API} from '../constants/Api';
import {get} from './api';

export const alldetails = async () => {
  return get(FILTER_DATA_API);
};

export const logedUserData = async () => {
  return get(GET_USER_DATA_API);
};
