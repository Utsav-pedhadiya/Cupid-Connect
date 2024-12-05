import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Header from '../../component/Header';
import {ProgressBar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import SignupStack from '../../navigation/SignupStack';
import {navigationRef} from '../../component/NavigationService';
const MStack = createStackNavigator();

const SignupScreens = ({navigation}) => {
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    defineProgress();
  });

  const defineProgress = () => {
    const currRoutdata = navigationRef.current.getCurrentRoute();

    switch (currRoutdata.name) {
      case 'Gender':
        setProgress(1);
        break;
      case 'Nationality':
        setProgress(2);
        break;
      case 'SkinColor':
        setProgress(3);
        break;
      case 'Profession':
        setProgress(4);
        break;
      case 'MaritialStatus':
        setProgress(5);
        break;
      case 'ReligiousCommitment':
        setProgress(6);
        break;
      case 'BodyStructure':
        setProgress(7);
        break;
      case 'AboutYourself':
        setProgress(8);
        break;
    }
  };
  const handleBackSlide = () => {
    navigationRef.current && navigationRef.current.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <Header onIconPress={handleBackSlide} />
      <ProgressBar progress={progress / 8} color={'#FC3876'} />
      <MStack.Navigator>{SignupStack(MStack)}</MStack.Navigator>
    </View>
  );
};
export default SignupScreens;
