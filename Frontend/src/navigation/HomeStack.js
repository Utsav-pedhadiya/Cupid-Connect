import React from 'react';
import routeNames from '../constants/routeNames';
import screens from '../screens/index';


const HomeStack = Stack => {
  const navigationOptions = {
    headerShown: false,
  };
  return (
    <>
      <Stack.Screen
        name={routeNames.APPNAVIGATOR}
        component={screens.AppNavigator}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PEOPLE}
        component={screens.People}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.VIEWPROFILE}
        component={screens.ViewProfile}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.NOTIFICATION}
        component={screens.Notification}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.SUBSCRIPTION}
        component={screens.SubScription}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.SUBSCRIPTIONDETAILS}
        component={screens.SubscriptionDetails}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PACKAGESUCCESS}
        component={screens.PackageSuccess}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PACKAGEERROR}
        component={screens.PackageError}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.REQUESTCONTACT}
        component={screens.RequestContact}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PROFILE}
        component={screens.Profile}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.PROFILEDETAILS}
        component={screens.ProfileDetails}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.EDITNAME}
        component={screens.EditName}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.LANGAUGE}
        component={screens.Langauge}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.SUPPORT}
        component={screens.Support}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.REPORTPROBLEM}
        component={screens.ReportProblem}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.MAINTERMSCONDITION}
        component={screens.MainTermsCondition}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.HISTORY}
        component={screens.History}
        options={navigationOptions}
      />
      <Stack.Screen
        name={routeNames.DELETEACCOUNT}
        component={screens.DeleteAccount}
        options={navigationOptions}
      />

    </>
  );
};
export default HomeStack;
