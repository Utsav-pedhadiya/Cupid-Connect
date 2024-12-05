import Splashscreen from './SplashScreen';
import AgreeTermsCondition from './AgreeTermsCondition';
import PhoneNumber from './PhoneNumber';
import Otp from './Otp';
import IntroSlider from './IntroSlider';
import Gender from './Gender';
import Nationality from './Nationality';
import Profession from './Profession';
import SkinColor from './SkinColor';
import MaritialStatus from './MaritalStatus';
import ReligiousCommitment from './ReligiousCommitment';
import BodyStructure from './BodyStructure';
import AboutYourself from './AboutYourself';
import SignupScreens from './SignupScreens';

//Home route
import AppNavigator from '../navigation/AppNavigator';
import TabNavigator from '../navigation/TabNavigator';
import People from './Peoples';
import ViewProfile from './ViewProfile';
import Notification from './Notification';
import SubScription from './SubScription';
import SubscriptionDetails from './SubscriptionDetails';
import PackageSuccess from './PackageSuccess';
import PackageError from './PackageError';
import RequestContact from './RequestContact';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import EditName from './EditName';
import Langauge from './Language';
import Support from './Support';
import ReportProblem from './ReportProblem';
import MainTermsCondition from './MainTermsCondition';
import History from './History';
import DeleteAccount from './DeleteAccount';
import ApplicationEvaluate from './ApplicationEvaluate';
import SubscriptionHistory from './SubscriptionHistory';

const screens = {
  //Auth stack screen
  Splashscreen,
  AgreeTermsCondition,
  PhoneNumber,
  Otp,
  IntroSlider,
  Gender,
  Nationality,
  Profession,
  SkinColor,
  MaritialStatus,
  ReligiousCommitment,
  BodyStructure,
  AboutYourself,
  SignupScreens,

  //Home stack screen
  AppNavigator,
  TabNavigator,
  People,
  ViewProfile,
  Notification,
  SubScription,
  SubscriptionDetails,
  PackageSuccess,
  PackageError,
  RequestContact,
  Profile,
  ProfileDetails,
  EditName,
  Langauge,
  Support,
  ReportProblem,
  MainTermsCondition,
  History,
  DeleteAccount,
  ApplicationEvaluate,
  SubscriptionHistory
};
export default screens;
