import {REQUEST_ACCEPT_API} from '../constants/Api';
import {PostApi} from './postServices';

export const acceptRequest = async (requestId, mobileNumber, note) => {
  const formattedNumber = mobileNumber.replace(/-/g, '');
  try {
    const response = await PostApi(REQUEST_ACCEPT_API + requestId, {
      number: formattedNumber,
      note: note,
    });
    return response;
  } catch (error) {
    throw new Error(`Error accepting request: ${error.message}`);
  }
};

export const GetNotificationData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/notification`);
    return response.data.notification;
  } catch (error) {
    throw new Error(`Error fetching notification data: ${error.message}`);
  }
};


